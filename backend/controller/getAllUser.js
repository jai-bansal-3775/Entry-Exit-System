const Register = require("../models/Register");
exports.getAllUser = async (req, res) => {

	try {
		const userData = await Register.find({}).sort({ indexDate: -1 });
		// console.log("Printing the User Data : ",userData);
		res.json({ success: true, data: userData });
	}
	catch (error) {
		console.log("input data is wrong")
		res.status(500).json({ success: false, error: error,message:"Process Failed"});
	}
};
