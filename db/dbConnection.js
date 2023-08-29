import mongoose from "mongoose";
const dbConnection = async (MONGO_URI) => {
  try {
    const options = {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      dbName: "mrEnterprise",
      authSource: "mrEnterprise",
    };
    await mongoose.connect(MONGO_URI, options);
    console.log("database connect successfully");
  } catch (err) {
    console.log(err);
  }
};
export { dbConnection };
