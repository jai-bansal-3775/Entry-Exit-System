import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js';
import { ApiError } from '../utils/ApiError.js';

const dbconnect = async () => {
	try {
		console.log(process.env.MONGODB_URI)
		const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
		console.log("Database connection successful, \nHost:", connectionInstance.connection.host);
	}
	catch (error) {
		throw new ApiError(400,"Database connection error", error)
	}
}

export default dbconnect;
