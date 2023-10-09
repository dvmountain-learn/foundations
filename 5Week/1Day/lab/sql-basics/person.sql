-- 1)
CREATE TABLE person (
	person_id SERIAL PRIMARY KEY,
    name VARCHAR,
    age INTEGER,
    height FLOAT,
    city VARCHAR(100),
    favorite_color VARCHAR(30)
);

-- 2)
INSERT INTO person(name, age, height, city, favorite_color) 
values
('Jorely', 23, 1.59, 'Utal', 'blue'),
('Josh', 43, 1.68, 'New York', 'red'),
('Xiaver', 33, 1.76, 'San Fransico', 'white'),
('Shewouen', 25, 1.58, 'Arizona', 'pink'),
('Altas', 23, 1.61, 'Alabama', 'yellow')
;

-- 3)
SELECT * FROM person 
ORDER BY height 
DESC;

-- 4)
SELECT * FROM person 
ORDER BY height 
ASC;

-- 5)
SELECT * FROM person 
ORDER BY age 
DESC;

-- 6)
SELECT * FROM person 
WHERE age > 20

-- 7)
SELECT * FROM person 
WHERE age = 18

-- 8)
SELECT * FROM person 
WHERE age < 20 AND age > 30;

-- 9)
SELECT * FROM person 
WHERE age <> 27;

-- 10)
SELECT * FROM person 
WHERE favorite_color <> 'red';

-- 11)
SELECT * FROM person 
WHERE favorite_color <> 'red' AND favorite_color <> 'blue';

-- 12)
SELECT * FROM person 
WHERE favorite_color = 'orange' OR favorite_color = 'green';

-- 13)
SELECT * FROM person 
WHERE favorite_color in ('orange','green', 'blue');

-- 14)
SELECT * FROM person 
WHERE favorite_color in ('yellow','purple');
