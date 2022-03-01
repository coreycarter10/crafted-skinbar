require("dotenv").config();
const migration = require("../db/seed");
const express = require("express");
const cors = require("cors");
const app = express();

const ctrl = require("./controller.js");

app.use(express.json());
app.use(cors());

// migration.seed();
app.get("/api/allProducts", ctrl.getProducts);
app.get("/api/userCart/:id", ctrl.getUserCart);
app.post("/api/addToCart", ctrl.addToCart);
app.delete("/api/userCart/:id", ctrl.removeFromCart);

// app.get('/services', ctrl.getServices);
app.post("api/book", ctrl.bookAppointment);
app.post("/api/signup", ctrl.signUp);
app.post("/login", ctrl.login);

app.listen(4000, () => console.log(`Server running on port 4000`));
