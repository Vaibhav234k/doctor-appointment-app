import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://sonivaibhav378:sonivaibhav378@docplus.laowaxp.mongodb.net/?retryWrites=true", {
      dbName: "doctor-app",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
