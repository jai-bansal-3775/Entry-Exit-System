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
        return res.status(300).json(
            new ApiResponse(300,"",`No student found || Roll No: ${rollNo}`)
        );
    }

    const existingOutEntry = await Register.findOne({
        $and: [
            { rollNo },
            { inDateAndTime: "" }
        ]
    });
    if(existingOutEntry){
        return res.status(300).json(
            new ApiResponse(300,"",`Student already out of the campus || Roll No: ${rollNo}`)
        );
    }

    const outEntry=await Register.create({ rollNo});
    if(!outEntry){
        throw new ApiError(400, "Out entry failed")
    }

    return res.status(200).json(
        new ApiResponse(200,"",`Out entry successfully created || Roll No: ${rollNo}`)
    );
})

const createInEntry = asyncHandler(async (req, res) => {
    const { rollNo } = req.body;
    console.log("Roll No : ", rollNo);

    const userExist=await Student.findOne({rollNo})
    if(!userExist){
        return res.status(300).json(
            new ApiResponse(300,"",`No student found || Roll No: ${rollNo}`)
        );
    }

    const existingOutEntry = await Register.findOne({
        $and: [
            { rollNo },
            { inDateAndTime: "" }
        ]
    });
    if(!existingOutEntry){
        return res.status(300).json(
            new ApiResponse(300,"",`No out entry found || Roll No: ${rollNo}`)
        );
    }

    const inEntry = await Register.findOneAndUpdate({ rollNo, inDateAndTime: "" }, { inDateAndTime: Date.now() });
    if(!inEntry){
        throw new ApiError(400, "In entry failed")
    }

    return res.status(200).json(
        new ApiResponse(200,"",`In entry successfully created || Roll No: ${rollNo}`)
    );
})

export {
    createOutEntry,
    createInEntry}