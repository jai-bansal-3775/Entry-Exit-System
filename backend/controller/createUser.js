const Register  =require("../models/User");

exports.createUser = async (req, res) => {
  try {
    console.log("Reached in Create User.");
    console.log("req body", req.body);
    // const {name,email,department,hostel,contact,rollNo} = req.body.data[0];

    const user = await Register.create({
      "name":req.body.data[0].name,
      "email": req.body.data[0].email,    
      "department":req.body.data[0].department,
      "hostel":req.body.data[0].hostel,
      "rollNo":req.body.data[0].rollNo,
      "contact":req.body.data[0].contact,
    });

    return res.status(200).json({
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("req body", req.body);
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
