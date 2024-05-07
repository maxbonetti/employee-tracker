INSERT INTO Departments (name) VALUES
('Human Resources'),
('Marketing'),
('Engineering'),
('Sales'),
('Customer Service');

-- Insert initial data into Employees, including managers
INSERT INTO Employees (first_name, last_name, department_id, manager_id, role) VALUES
('Alice', 'Smith', 1, NULL, 'Manager'), 
('Bob', 'Johnson', 2, NULL, 'Manager'), 
('Charlie', 'Brown', 3, 1, 'Developer'), 
('Sam', 'Argintary', 3, 1, 'Tester'), 
('Donny', 'Sehr', 5, 2, 'Support'); 

-- Insert initial data into Roles if using a separate Roles table
INSERT INTO Roles (title, salary) VALUES
('Manager', 150000),
('Developer', 90000),
('Tester', 12000),
('Support', 55000);