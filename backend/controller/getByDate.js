// const Register = require("../models/Register");
// exports.getOutUserbyDate = async (req, res) => {
//     const date = new Date(req.params.id); // Convert the date string to a Date object

//     console.log("Printing the Date : ",date);
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const day = date.getDay();

//     try {
//         // Find user data where outTime is within the specified date
//         const userData = await Register.find({
//             outTime:date
//         }).sort({ outTime: -1 });

//         console.log("Printing the User Out Data:", userData);
//         res.json({ success: true, data: userData });
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//         res.status(500).json({ success: false, error: "Process Failed" });
//     }
// };

const Register = require("../models/Register");

exports.getOutUserbyDate = async (req, res) => {
    const date = new Date(req.params.id); // Convert the date string to a Date object

    console.log("Printing the Date : ", date);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate(); // Use getDate() instead of getDay()

    try {
        // Find user data where outTime is within the specified date
        const userData = await Register.find({
            outTime: {
                $gte: new Date(year, month, day), // Greater than or equal to the start of the day
                $lt: new Date(year, month, day + 1) // Less than the start of the next day
            }
        }).sort({ outTime: -1 });

        console.log("Printing the User Out Data:", userData);
        res.json({ success: true, data: userData });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ success: false, error: "Process Failed" });
    }
};