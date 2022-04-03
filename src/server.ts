import "reflect-metadata";

import express from "express";

import "./database"
import { routes } from "./routes";

const app = express();

app.use(routes);

app.listen(8081, () => console.log("Server is running"));