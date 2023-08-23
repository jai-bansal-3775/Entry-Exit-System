const Register = require("../models/Register");

exports.getOutUserbyDate = async (req, res) => {
    try {
    const date = new Date(req.params.id); // Convert the date string to a Date object

    console.log("Printing the Date : ", date);
    // const year = date.getFullYear();
    // const month = date.getMonth();
    // const day = date.getDate(); // Use getDate() instead of getDay()

    const dateString = date.toDateString();


        // Find user data where outTime is within the specified date
        console.log("Printing the Date : ", date);
        const userData = await Register.find({
            outDate:dateString
        }).sort({ indexDate:-1 });

        console.log("Printing the User Out Data:", userData);
        res.json({ success: true, data: userData });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ success: false, error: "Process Failed" });
    }
};