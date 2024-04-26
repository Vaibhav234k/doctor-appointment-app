import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/doctor-app", {
      dbName: "doctor-app",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
