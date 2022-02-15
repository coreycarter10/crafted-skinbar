const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    let salt = bcrypt.genSaltSync(10);

    let passwordHash = await bcrypt.hash(password, salt);

    await sequelize.query(`
      INSERT INTO clients(first_name, last_name, email, password)
      VALUES (
        '${firstName}',
        '${lastName}',
        '${email}',
        '${passwordHash}',
      )
    `);
    const clientInfo = await sequelize.query(`
      SELECT id, first_name, last_name, email FROM clients WHERE email = '${email}
    `);
    res.status(200).send(clientInfo);
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
      res.status(401).send("Email or password is incorrect");
    }
  },
};
