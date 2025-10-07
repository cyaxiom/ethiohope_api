import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index";
import { globalErrorHandler, notFoundHandler } from './middlewares/errorHandler';

// Load environment variables from .env file
const envFile = process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({ path: envFile });

const app = express();

// Allow cross-origin requests
const allowedOrigins = [process.env.FRONTEND_URL, process.env.DASHBOARD_URL].filter(
  Boolean
) as string[];

const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

// Global error handler
app.use(notFoundHandler);

// Global error handler
app.use(globalErrorHandler);

export default app;
