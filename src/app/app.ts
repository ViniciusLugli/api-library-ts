import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "../infra/http/middlewares/errorHandler";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.json({ message: "API is running" });
});

app.use(errorHandler);

export default app;
