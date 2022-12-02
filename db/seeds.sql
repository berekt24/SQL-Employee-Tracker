USE business_db;

INSERT INTO department (department_name, roles_id)
VALUES ("Lion King", 1),
       ("The Godfather", 2),
       ("West Side Story", 3),
       ("Parasite", 4),
       ("The Wizard of Oz", 5);

INSERT INTO roles (title, salary, department_id)
VALUES ("hello", 100, 1),
       ("world", 200, 2),
       ("green", 134, 3),
       ("blue", 343, 4),
       ("red", 929, 5);

INSERT INTO employees(id, first_name, last_name, roles_id, manager_id)
VALUES
(1, 'frank', 'stevenson', '1', '1'),
(2, 'Kobe', 'Bryant', '2', '2'),
(3, 'john', 'trill', '3', '3'),
(4, 'will', 'smith', '4', '4'),
(5,'craig', 'robinson', '5', '5'),
(6, 'jay', 'williams','1', '1'),
(7, 'greg', 'seymour','2', '2');