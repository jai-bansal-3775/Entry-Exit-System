const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},

	rollNo: {
		type: String,
		required: true,
		unique:true,
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
});

const registerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},

	rollNo: {
		type: Number,
		required: true,
		unique:true,
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

module.exports = mongoose.model("RegisterSchema", registerSchema);
module.exports = mongoose.model("User", userSchema);

