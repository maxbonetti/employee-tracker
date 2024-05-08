INSERT INTO departments (name) VALUES
('Human Resources'),
('Marketing'),
('Engineering'),
('Sales'),
('Customer Service');

-- Insert initial data into Employees, including managers
INSERT INTO employees (first_name, last_name, department_id, manager_id, role) VALUES
('Alice', 'Smith', 1, NULL, 'Manager'), 
('Bob', 'Johnson', 2, NULL, 'Manager'), 
('Charlie', 'Brown', 3, 1, 'Developer'), 
('Sam', 'Argintary', 3, 1, 'Tester'), 
('Donny', 'Sehr', 5, 2, 'Support'); 

-- Insert initial data into Roles if using a separate Roles table
INSERT INTO roles (title, salary, department_id) VALUES
('Manager', 150000, 1),
('Developer', 90000, 3),
('Tester', 12000, 3),
('Support', 55000, 5);