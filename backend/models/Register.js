const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	rollNo: {
		type: Number,
		required: true,
	},

	department: {
		type: String,
		required: true,
		maxLength: 20,
	},
	
	contact :
	{
		type:Number,
		required:true,
		maxLength:10,
		minLength:10,
	},

	hostel: {
		type: String,
		required: true,
	},

    outTime :
    {
        type:Date,
        Default:Date.now(),
    },

    inTime :
    {
        type:Date,
    }
});

module.exports = mongoose.model("Register", registerSchema);