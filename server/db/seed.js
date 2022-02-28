const sequelize = require("./sequelize");

module.exports = {
  seed: (req, res) => {
    sequelize.query(`
        drop table if exists clients;
        drop table if exists appointments;
        drop table if exists services;
        
        CREATE TABLE clients (
          id SERIAL PRIMARY KEY,
          first_name VARCHAR(75),
          last_name VARCHAR(75),
          email VARCHAR(75),
          password VARCHAR(255)
        );
        
        CREATE TABLE appointments (
          client_id INT,
          id SERIAL PRIMARY KEY,
          service_id INT,
          appointment_time TIMESTAMP
        );
        
        CREATE TABLE services (
          id SERIAL PRIMARY KEY,
          name VARCHAR(200),
          price decimal
        );

        ALTER TABLE "appointments" ADD FOREIGN KEY ("client_id") REFERENCES "clients"("id");
        ALTER TABLE "appointments" ADD FOREIGN KEY ("service_id") REFERENCES "services"("id");
    `);
  },
};
