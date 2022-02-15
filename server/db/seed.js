const sequelize = require("./sequelize");

module.exports = {
  seed: (req, res) => {
    sequelize.query(`
        drop table if exists clients;
        drop table if exists appoointments;
        drop table if exists services;
        
        CREATE TABLE clients (
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(75),
            last_name VARCHAR(75),
            email VARCHAR(75),
            password VARCHAR(255)
        );
        
        CREATE TABLE appointments (
            client_id REFERENCES clients(id),
            id SERIAL PRIMARY KEY,
            service REFERENCES services(name),
            price REFERENCES services(price)
            upcoming_appointments TIMESTAMP,
            past_appointments TIMESTAMP
        );
        
        CREATE TABLE services (
            id SERIAL PRIMARY KEY,
            name VARCHAR(200),
            price decimal NOT NULL,
        );
    `);
  },
};
