CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(75),
    last_name VARCHAR(75),
    email VARCHAR(75),
    password VARCHAR(255)
);

CREATE TABLE appointments (
    client_id INT REFERENCES clients(id),
    id SERIAL PRIMARY KEY,
    service REFERENCES services(name),
    price REFERENCES services(price),
    upcoming_appointments TIMESTAMP,
    past_appointments TIMESTAMP
);

CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    price decimal NOT NULL,
);

CREATE TABLE client_cart (

);

CREATE TABLE products (

);