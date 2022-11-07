import express from "express";
import logger from "morgan";
import bodyParser from 'body-parser'

import routes from "./routes";
// import { open } from "./database/index"

const app = express();
app.disable("x-powered-by");


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger("dev", { skip: () => app.get("env") === "test" }));
app.use(routes);

// open()

export default app;
