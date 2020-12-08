import { mongoUri } from "./config";
import mongoose from "mongoose";

export async function startMongo() {
  mongoose
    .connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(
      () => console.log("🍃 Connected to MongoDB"),
      (err) => {
        console.log("Error connecting to mongo: " + err);
        process.exit(1);
      }
    );
}
