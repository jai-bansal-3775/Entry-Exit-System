const Register = require("../models/Register");
exports.getOutUserbyDate = async (req, res) => {
    const date = new Date(req.params.id); // Convert the date string to a Date object

    // Set the time range for the selected date
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0); // Set to the start of the day (00:00:00)
    
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999); // Set to the end of the day (23:59:59.999)

    try {
        // Find user data where outTime is within the specified date
        const userData = await Register.find({
            outTime: { $gte: startDate, $lt: endDate }
        }).sort({ outTime: -1 });

        console.log("Printing the User Out Data:", userData);
        res.json({ success: true, data: userData });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ success: false, error: "Process Failed" });
    }
};