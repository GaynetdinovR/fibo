import express from "express";
import bodyParser from "body-parser";
import "./database/database.js";
import {
	getProducts,
	authorization,
	getUserByPhone,
	getPromos,
	updateUserData,
	getUserOrdersByPhone, createOrder
} from "./database/methods.js";
import cors from "cors";
import compression from 'compression'

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression({ level: 6 }));

app.post("/auth", authorization);

app.post("/getuser", getUserByPhone);

app.post('/updateuser', updateUserData);

app.get("/products", getProducts);

app.get("/promos", getPromos);

app.post("/getorders", getUserOrdersByPhone);

app.post("/createorder", createOrder);

app.listen(port, () => console.log(`Listening on port ${port}. \nhttp://localhost:${port}/`));
