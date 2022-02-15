const CONNECTION_STRING = process.env.CONNECTION_STRING;

const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ss: {
      rejectUnauthorized: false,
    },
  },
});
