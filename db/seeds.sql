USE business_db;

INSERT INTO department (department_name, roles_id)
VALUES ("Human Resources", 1),
       ("Food Services", 2),
       ("Customer Service", 3),
       ("Information Technology", 4),
       ("Accounting", 5);

INSERT INTO roles (title, salary, department_id)
VALUES ("Human Resource Manager", 80000, 1),
       ("Food Service Manager", 100000, 2),
       ("Customer Service Manager", 90000, 3),
       ("Information Technology Manager", 200000, 4),
       ("Accountant", 120000, 5);

INSERT INTO employees(id, first_name, last_name, roles_id, manager_id)
VALUES
(1, 'jonah', 'hill', '1', '1'),
(2, 'seth', 'rogen', '2', '2'),
(3, 'morgan', 'freeman', '3', '3'),
(4, 'will', 'smith', '4', '4'),
(5,'jada', 'pinkett', '5', '5');