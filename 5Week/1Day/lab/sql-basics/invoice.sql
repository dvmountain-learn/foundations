-- 1)
SELECT COUNT(invoice_id) FROM invoice
WHERE billing_country = 'USA';

-- 2)
SELECT customer_id, total FROM invoice
WHERE total = (SELECT MAX(total) FROM invoice);

-- 3)
SELECT customer_id, total FROM invoice
WHERE total = (SELECT MIN(total) FROM invoice);

-- 4)
SELECT  customer_id, total FROM invoice
WHERE total > 5
GROUP BY customer_id, total

-- 5)
SELECT COUNT(total) FROM invoice
WHERE total < 5;

-- 6)
SELECT COUNT(total) FROM invoice
WHERE billing_state in ('CA', 'TX', 'AZ');

-- 7)
SELECT AVG(total) as AverageOfTotal FROM invoice;

-- 8)
SELECT SUM(total) as totalOfAmount FROM invoice;

-- 9)
UPDATE invoice SET total = 26
WHERE invoice_id = 5;

-- 10)
DELETE FROM invoice_line 
WHERE invoice_id = 1;