import express from "express";
import dotenv from "dotenv";
import connectDb from "./configs/db.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import courseRouter from "./routes/courseRoute.js";
import paymentRouter from "./routes/paymentRoute.js";
import aiRouter from "./routes/aiRoute.js";
import reviewRouter from "./routes/reviewRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// -------------------- Middlewares --------------------
app.use(express.json());
app.use(cookieParser());

// ✅ Allow frontend to send/receive cookies
app.use(
    cors({
        origin: "http://localhost:5173", // frontend url
        credentials: true, // allow cookies
    })
);

// -------------------- Routes --------------------
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/course", courseRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/ai", aiRouter);
app.use("/api/review", reviewRouter);

app.get("/", (req, res) => {
    res.send("Hello From Server ✅");
});

// -------------------- Start Server --------------------
app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`);
    connectDb();
});
