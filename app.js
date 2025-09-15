import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./src/config/database.js";
import { userRouter } from "./src/routes/user.routes.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/api", userRouter);


app.listen(PORT, async () => {
    await connectDB();
    console.log(`Corriendo en puerto ${PORT}`);
});