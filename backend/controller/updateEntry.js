const Register = require("../models/Register");
exports.updateEntry = async (req, res) => {

	const roll = req.params.id;
	console.log("Printing Roll No in getallUser  :",roll);
    const currentTime = new Date();
    const formattedTime = currentTime.toISOString();

	try {
		const userData = await Register.findOneAndUpdate({rollNo:roll},{inTime:formattedTime},
        {
            useFindAndModify:false,
            new:true,
        }
        );

        if(!userData){
            return res.status(404).json({success:false,message:"User not found"});
        }

		console.log("User Data Updated Successfully");
		res.json({ success: true, data: userData });
	} catch (error) {
		console.error("An error occured:",error);
		res.status(500).json({ success: false, error:"Internal Server Error"});
	}
};
