-- 1)
INSERT INTO artist(name)
VALUES('Maria'),
('Louise'),
('Riza-i')
;

-- 2)
SELECT * FROM artist
ORDER BY name DESC
LIMIT 10;

-- 3)
SELECT * FROM artist
ORDER BY name ASC
LIMIT 5;

-- 4)
SELECT * FROM artist
WHERE name like 'Black%';

-- 5)
SELECT * FROM artist
WHERE name like '%Black%';