import express from "express";
import bodyParser from "body-parser";
import "./database/database.js";
import { getProducts } from "./database/getMethods.js";

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}. \nhttp://localhost:${port}/`));

app.get("/products", getProducts);