DROP DATABASE IF EXISTS database_db;
CREATE DATABASE database_db;
\c database_db;


-- Create a table for Departments
CREATE TABLE IF NOT EXISTS departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

-- Create a table for Employees
CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    department_id INTEGER REFERENCES departments(id),
    manager_id INTEGER REFERENCES employees(id),
    role VARCHAR(255) NOT NULL
);

-- create a separate table for roles 
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL,
    salary FLOAT NOT NULL,
    department_id INTEGER NOT NULL REFERENCES departments(id)
);