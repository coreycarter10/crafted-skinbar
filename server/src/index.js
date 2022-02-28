const express = require("express");
const cors = require("cors");
const app = express();

const ctrl = require("./controller.js");

app.use(express.json());
app.use(cors());

// app.get('/services', ctrl.getServices);
// app.get('/api/instagram/craftedskinbar', ctrl.getInsta);
app.post("/signup", ctrl.signUp);
// app.post("/login", ctrl.login);

app.listen(4000, () => console.log(`Server running on port 4000`));
