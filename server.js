import express from "express";
import bodyParser from "body-parser";
import "./database/database.js";
import { getProducts, authorization, getUserByPhone } from "./database/methods.js";

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/products", getProducts);

app.post("/auth", authorization);

app.post("/getuser", getUserByPhone);


app.listen(port, () => console.log(`Listening on port ${port}. \nhttp://localhost:${port}/`));
