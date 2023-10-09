-- 1)
SELECT first_name, last_name FROM employee
WHERE city = 'Calgary';

-- 2)
-- Return result as the same but we can display fields that you wanna 
-- SELECT MIN(birth_date) as youngestAge FROM employee

SELECT first_name, last_name, birth_date FROM employee
WHERE birth_date = (SELECT MIN(birth_date) FROM employee);

-- 3)
SELECT first_name, last_name, birth_date FROM employee
WHERE birth_date = (SELECT MAX(birth_date) FROM employee);

-- 4)
SELECT * FROM employee
WHERE employee_id = 2;

-- 5)
SELECT COUNT(employee_id) FROM employee
WHERE city = 'Lethbridge';