import { Register} from "../models/register.model.js";
import { Student } from "../models/student.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";

const createOutEntry = asyncHandler(async (req, res) => {
    const { rollNo } = req.body;
    console.log("Body : ", req.body);

    const userExist=await Student.findOne({rollNo})
    if(!userExist){
        throw new ApiError(400, "No student found")
    }

    const existingOutEntry = await Register.findOne({
        $and: [
            { rollNo },
            { inDateAndTime: "" }
        ]
    });
    if(existingOutEntry){
        throw new ApiError(400, "Student already out")
    }

    const outEntry=await Register.create({ rollNo});
    if(!outEntry){
        throw new ApiError(400, "Out entry failed")
    }

    return res.status(200).json(
        new ApiResponse(200,"","Out entry successfully created")
    );
})

const createInEntry = asyncHandler(async (req, res) => {
    const { rollNo } = req.body;
    console.log("Roll No : ", rollNo);

    const userExist=await Student.findOne({rollNo})
    if(!userExist){
        throw new ApiError(400, "No student found")
    }

    const existingOutEntry = await Register.findOne({
        $and: [
            { rollNo },
            { inDateAndTime: "" }
        ]
    });
    if(!existingOutEntry){
        console.log(true)
        throw new ApiError(400, "No out entry found for the student")
    }

    const inEntry = await Register.findOneAndUpdate({ rollNo, inDateAndTime: "" }, { inDateAndTime: Date.now() });
    if(!inEntry){
        throw new ApiError(400, "In entry failed")
    }

    return res.status(200).json(
        new ApiResponse(200,"","In entry successfully created")
    );
})

export {
    createOutEntry,
    createInEntry}