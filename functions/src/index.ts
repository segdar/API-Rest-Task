import app from "./app";
import { onRequest } from "firebase-functions/v2/https";
export const appnote = onRequest(app);