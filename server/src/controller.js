const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    let salt = bcrypt.genSaltSync(10);

    let passwordHash = await bcrypt.hash(password, salt);
  },
};
