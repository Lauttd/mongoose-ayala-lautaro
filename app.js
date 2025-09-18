import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./src/config/database.js";
import { userRouter } from "./src/routes/user.routes.js";
import { profileRouter } from "./src/routes/profile.routes.js";
import { gamesRouter } from "./src/routes/games.routes.js";
import { tagRouter } from "./src/routes/tag.routes.js";
import { tagGameRouter } from "./src/routes/tagGames.routes.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", profileRouter);
app.use("/api", tagRouter);
app.use("/api", tagGameRouter);
app.use("/api", gamesRouter);

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Corriendo en puerto ${PORT}`);
});