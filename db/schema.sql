-- Create a table for Departments
\c postgres;
CREATE TABLE IF NOT EXISTS Departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

-- Create a table for Employees
CREATE TABLE IF NOT EXISTS Employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    department_id INTEGER REFERENCES Departments(id),
    manager_id INTEGER REFERENCES Employees(id),
    role VARCHAR(255) NOT NULL
);

-- create a separate table for roles 
-- if roles have more complex attributes
CREATE TABLE IF NOT EXISTS Roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL
);