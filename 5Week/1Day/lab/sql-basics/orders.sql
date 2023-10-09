-- 1)
CREATE TABLE orders (
	order_id SERIAL PRIMARY KEY,
	person_id INT,
	product_name VARCHAR(100),
	product_price FLOAT,
	quantity INT,
	CONSTRAINT FK_PersonOrder FOREIGN KEY (person_id)
	REFERENCES person(person_id)
);

-- 2)
INSERT INTO orders(person_id, product_name, product_price, quantity)
VALUES 
(1, 'iPhone 15 Pro Max', 1599.99, 100),
(1, 'MacBook Pro 15 inc', 2999.99, 25),
(2, 'Google Pixel', 795.38, 10),
(3, 'Samsung', 488.47, 30), 
(3, 'Surface 13', 789.37, 5)
;

-- 3)
SELECT * FROM orders;

-- 4)
SELECT SUM(quantity) as total FROM orders;

-- 5)
SELECT SUM(product_price) as amount FROM orders;

-- 6)
SELECT person_id, SUM(product_price) as amount FROM orders
GROUP BY person_id 
ORDER BY person_id ASC;