DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

\c customer_db;

CREATE TABLE customers (
  id bigint unique,
  first_name varchar not null,
  last_name text not null,
  value_card_member integer not null
);
