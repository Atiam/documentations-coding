DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
\c books_db;

-- Add biography table --
create table biography (id INTEGER, name VARCHAR(100));
