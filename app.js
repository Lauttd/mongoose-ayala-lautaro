import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./src/config/database.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Corriendo en puerto ${PORT}`);
});