const Register = require("../models/Register");

exports.createUser = async (req, res) => {
  try {
    console.log("Reached in Create User.");
    console.log("req body", req.body);

    // Check if data with the given rollNo exists and get the most recent one
    const existingUser = await Register.findOne({ rollNo: req.body.data[0].rollNo })
      .sort({ outTime: -1 }) // Sort by outTime in descending order
      .limit(1); // Limit to the first result (most recent)

    console.log(existingUser);

    if (existingUser) {
      if (existingUser.inTime) {
        // Data doesn't exist, create a new entry
        const currentTime = new Date();
        // const formattedTime = currentTime.toISOString();

        const url = `https://api.dicebear.com/5.x/initials/svg?seed=${req.body.data[0].name}`;
        const user = await Register.create({
          name: req.body.data[0].name,
          email: req.body.data[0].email,
          department: req.body.data[0].department,
          hostel: req.body.data[0].hostel,
          rollNo: req.body.data[0].rollNo,
          contact: req.body.data[0].contact,
          outTime: currentTime,
          image: url,
        });

        return res.status(201).json({
          status: 201,
          message: "User created successfully",
          data: user,
        });
      } else {
        return res.status(400).json({
          status: 400,
          message: "User already Out",
        });
      }
    } else {
      // Data doesn't exist, create a new entry
      const currentTime = new Date();
      // const formattedTime = currentTime.toISOString();
      const year = currentTime.getFullYear();
      
      const month = currentTime.getMonth();
      const day = currentTime.getDate();
      console.log("Year in Create user is : ",year);
      console.log("Month in Create user is : ",month);
      console.log("day in Create user is : ",day);

      // const date = `${year}-${month}-${day}`;

      const user = await Register.create({
        name: req.body.data[0].name,
        email: req.body.data[0].email,
        department: req.body.data[0].department,
        hostel: req.body.data[0].hostel,
        rollNo: req.body.data[0].rollNo,
        contact: req.body.data[0].contact,
        outTime:currentTime,
        // outTime: formattedTime,
        // outTime:date
      });

      return res.status(201).json({
        status: 201,
        message: "User created successfully",
        data: user,
      });
    }
  } catch (error) {
    console.log("req body", req.body);
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};