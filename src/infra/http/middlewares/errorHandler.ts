import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../shared/errors/AppError";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.log(err);
  const statusCode =
    err.statusCode && typeof err.statusCode === "number" ? err.statusCode : 500;
  const message = err.message || "Internal server error";

  const responseBody: any = {
    status: "error",
    message,
  };

  if (process.env.NODE_ENV === "development" && err.stack) {
    responseBody.stack = err.stack;
  }

  return res.status(statusCode).json(responseBody);
};
