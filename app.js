import express from "express";
import { configDotenv } from "dotenv";
import { join } from "path";
import web from "./routes/web.js";
import { dbConnection } from "./db/dbConnection.js";
const app = express();

//configure environment variables
configDotenv();

//Serving static files
app.use(express.static(join(process.cwd(), "public")));

app.use(express.urlencoded({ extended: true }));

//Set view engine
app.set("view engine", "ejs");

//Database connection
const uri = process.env.MONGO_URI;
dbConnection(uri);

//Routes
app.use("/", web);

//listen server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server runing on http://localhost:${port}`);
});
