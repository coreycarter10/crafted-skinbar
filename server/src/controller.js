const bcrypt = require("bcryptjs");
const sequelize = require("../db/sequelize");

module.exports = {
  signUp: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    let salt = bcrypt.genSaltSync(10);

    let passwordHash = await bcrypt.hash(password, salt);

    await sequelize.query(`
      INSERT INTO clients(first_name, last_name, email, password)
      VALUES (
        '${firstName}',
        '${lastName}',
        '${email}',
        '${passwordHash}'
      )
    `);
    const clientInfo = await sequelize.query(`
      SELECT id, first_name, last_name, email FROM clients WHERE email = '${email}
    `);
    const cleanedClient = {
      firstName: clientInfo.first_name,
      lastName: clientInfo.last_name,
      email: clientInfo.email,
    };
    res.status(200).send(cleanedClient);
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const validClient = await sequelize
      .query(
        `
    SELECT * FROM clients WHERE email = '${email}'
    `
      )
      .catch((err) => console.log(err));

    if (validClient[1].rowCount === 1) {
      if (bcrypt.compareSync(password, validClient[0][0].password)) {
        let client = {
          id: validClient[0][0].id,
          firstName: validClient[0][0].firstName,
          lastName: validClient[0][0].lastName,
          email: validClient[0][0].email,
        };
        res.status(200).send(client);
      } else {
        res.status(401).send("Email or password is incorrect");
      }
    } else {
      res.status(401).send("Please create an account first!");
    }
  },

  getServices: async (req, res) => {
    const services = await sequelize.query(`
      SELECT * FROM services
    `);
    res.status(200).send(services);
  },

  bookAppointment: async (req, res) => {
    const { time, service } = req.body;

    const booking = await sequelize.query(`
      SELECT id, name, price FROM services WHERE service = '${service}';
      SELECT appointment_time WHERE TIMESTAMP = '${time}';
    `);

    if (booking)
      return res.status(200).send("This appointment is already booked");
  },

  getProducts: async (req, res) => {
    let products = await sequelize.query(`
      SELECT * FROM products
    `);
    res.status(200).send(products[0]);
  },

  getUserCart: async (req, res) => {
    const { id } = req.params;
    const myCart = await sequelize.query(`
      SELECT c.id as cart_id, p.name, p.description FROM cart c
      JOIN products p
      ON c.product_id = p.id
      WHERE c.user_id = ${id}
    `);
    res.status(200).send(myCart[0]);
  },

  addToCart: async (req, res) => {
    const { userID, productID } = req.body;
    await sequelize.query(`
      INSERT INTO cart (user_id, product_id)
      VALUES (
        ${userID},
        ${productID}
      )
    `);
    res.status(200).send("Item added to cart");
  },

  removeFromCart: async (req, res) => {
    const { id } = req.params;
    await sequelize.query(`
      DELETE FROM car WHERE id = ${id}
    `);
    res.status(200).send("Removed from cart");
  },
};
