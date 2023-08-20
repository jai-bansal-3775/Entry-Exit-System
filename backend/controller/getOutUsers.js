const Register = require("../models/Register");
exports.getOutUser = async (req, res) => {

	try {
		const userData = await Register.find({inTime:{$exists:false}});
		console.log("Printing the User Out Data : ",userData);
		res.json({ success: true, data: userData });
	} catch (error) {
		console.log("input data is wrong")
		res.status(500).json({ success: false, error: error,message:"Process Failed"});
	}
};