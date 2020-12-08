require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { exceptionHandler } from "./utils/exceptionHandler";
import { startMongo } from "./utils/mongoConfig";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//startMongo();

const port = process.env.PORT || 5000;

app.use("/api", require("./routes"));

app.use(exceptionHandler); // must be last middleware func

app.get("/", (req, res) => {
  res.send("This is the edu feedback platform server");
});

app.listen(port, () => {
  console.log(`💪 Server is running on port: ${port}`);
});
