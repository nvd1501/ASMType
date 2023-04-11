import express from "express";
import productRouter from "./routes/product";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routes/auth";
import categoryRouter from "./routes/category";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// router
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);

mongoose.connect("mongodb://127.0.0.1:27017/we17303");

export const viteNodeApp = app;

// B1: npm i vite vite-plugin-node -D
// B2: tạo file vite.config.js ở root -> copy code của thầy
// B3: chỉnh sửa file package.json -> copy code của thầy
// B4: chỉnh sửa file app.js -> export const viteNodeApp = app; ở cuối file
// B5: npm run dev
