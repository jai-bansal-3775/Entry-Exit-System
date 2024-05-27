import dbconnect from "./database/index.js";
import { ApiError } from "./utils/ApiError.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config(
  {
    path: './.env'
  }
);

dbconnect()
  .then(() => {
    app.on('error', (error) => {
      console.log("Express error : ", error);
    })

    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is running on port ${process.env.PORT}`);
    })
  })
  .catch((error) => {
    throw new ApiError(400, "Database connection error", error)
  })