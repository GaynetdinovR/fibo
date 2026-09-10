import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import compression from 'compression';
import "../database/database.js";

import {
	getProducts,
	authorization,
	getUserByPhone,
	getPromos,
	updateUserData,
	getUserOrdersByPhone, createOrder
} from "../database/methods.js";

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression({ level: 6 }));

app.get('/api/products', getProducts);
app.post('/api/auth', authorization);
app.post('/api/getuser', getUserByPhone);
app.post('/api/updateuser', updateUserData);
app.get('/api/promos', getPromos);
app.post('/api/getorders', getUserOrdersByPhone);
app.post('/api/createorder', createOrder);

app.listen(port, "0.0.0.0", () => console.log(`API listening on port ${port}.`));
// Production
// app.listen(port, () => console.log(`Listening on port ${port}. \nhttp://localhost:${port}/`));

export default app;