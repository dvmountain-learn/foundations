 
--  Working on database books

SELECT *
FROM authors
WHERE id IN (
  SELECT author_id FROM books WHERE pages > 1000
);

UPDATE books
SET pages = 7
WHERE id IN (
  SELECT id
  FROM books
  WHERE title = 'Tiny Book'
);

DELETE
FROM books
WHERE author_id IN (
  SELECT id
  FROM authors
  WHERE author = 'Williams'
);

-- Working on database sample-db
-- 1. Get all invoices where the unit_price on the invoice_line is greater than $0.99.

SELECT * FROM invoice iv 
JOIN invoice_line il ON iv.invoice_id = il.invoice_id
WHERE unit_price > 0.99

-- Sub Query
SELECT * FROM invoice 
WHERE invoice_id IN (
	SELECT invoice_id FROM invoice_line 
    WHERE unit_price > 0.99
);

-- 2. Get all playlist tracks where the playlist name is Music.
SELECT * FROM playlist_track pt, playlist p
WHERE p.name = 'Music';


SELECT * FROM playlist_track pt
JOIN playlist p on pt.playlist_id = p.playlist_id
WHERE name = 'Music';

SELECT * FROM playlist_track
WHERE playlist_id IN (
    SELECT playlist_id FROM playlist 
    WHERE name = 'Music'
)

-- 3. Get all track names for playlist_id 5.
SELECT * FROM track t
JOIN playlist_track pt ON t.track_id = pt.track_id
WHERE pt.playlist_id = 5;

-- Sub Query
SELECT * FROM track
WHERE playlist_id IN (
    SELECT track_id FROM playlist_track
    WHERE playlist_id = 5
)

-- 4. Get all tracks where the genre is Comedy.
SELECT * FROM track t
JOIN genre g on g.genre_id = t.genre_id
WHERE g.name = 'Comedy';

SELECT * FROM track t, genre g
WHERE t.genre_id = g.genre_id AND g.name = 'Comedy';

-- Sub Query
SELECT * FROM track
WHERE genre_id IN (
    SELECT genre_id FROM genre 
    WHERE name = 'Comedy'
);

-- 5. Get all tracks where the album is Fireball.
SELECT * FROM track t
JOIN album b on b.album_id = t.album_id
WHERE b.title = 'Fireball';

-- Sub Query
SELECT * FROM track
WHERE album_id IN (
    SELECT album_id FROM album 
    WHERE title = 'Fireball'
)

-- 6. Get all tracks for the artist Queen ( 2 nested subqueries ).
SELECT * FROM track 
WHERE album_id IN (
	SELECT album_id FROM album 
		WHERE artist_id IN (
			SELECT artist_id FROM artist
			WHERE name = 'Queen'
		)
);


