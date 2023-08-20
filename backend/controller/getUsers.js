const User = require("../models/User");
exports.getUser = async (req, res) => {

	const roll = req.params.id;
	console.log("Printing Roll No in getallUser  :",roll);

	try {
		const userData = await User.find({rollNo:roll});
		console.log("Printing the User Data : ",userData);
		res.json({ success: true, data: userData });
	} catch (error) {
		console.log("input data is wrong")
		res.status(500).json({ success: false, error: error,message:"Process Failed"});
	}
};
