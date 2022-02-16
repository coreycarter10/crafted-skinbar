const express = require("express");
const cors = require("cors");
const app = express();

const ctrl = require("./controller");

app.use(express.json());
app.use(cors());

// app.get('/api/instagram/craftedskinbar', ctrl.getInsta);
app.post("/signup", ctrl.signUp);
// app.post("/login", ctrl.login);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
