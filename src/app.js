import express, { json } from "express";
import cors from "cors";
import router from "./routers/index.js";

const app = express();

app.use(cors());
app.use(json());
app.use(router);

export default app;
