const Register = require("../models/Register");
exports.updateEntry = async (req, res) => {

	const roll = req.params.id;
	console.log("Printing Roll No in getallUser  :",roll);
    const currentTime = new Date();
    const formattedTime = currentTime.toISOString();

	try {
		const userData = await Register.findOneAndUpdate({rollNo:roll},{inTime:formattedTime},
        {
            useFindAndModify:false
        },
        (err)=>{
            if(err){
                console.log(err)
            }
            console.log("User Data Updated Successfully");
        })

		console.log("Printing the User Data : ",userData);
		res.json({ success: true, data: userData });
	} catch (error) {
		console.log("input data is wrong")
		res.status(500).json({ success: false, error: error,message:"Process Failed"});
	}
};
