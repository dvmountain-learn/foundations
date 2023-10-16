-- pokemon_species {
-- 	id integer pk increments
-- 	name varchar(64) unique
-- 	ability varchar(64)
-- 	type varchar(64)
-- }

-- pokemon {
-- 	id integer pk increments
-- 	nickname varchar(64) null
-- 	level integer
-- 	attack integer
-- 	defense integer
-- 	health integer
-- 	held_item varchar(32) null
-- 	pokemon_species_id integer *> pokemon_species.id
-- }

-- moves {
-- 	id integer pk increments
-- 	power integer
-- 	status_effect varchar(32) null
-- 	accuracy decimal
-- 	type varchar
-- }

-- pokemon_moves {
-- 	id integer pk increments
-- 	pokemon_id integer *> pokemon.id
-- 	move_id integer > moves.id
-- }

-- trainers {
-- 	id integer pk increments
-- 	first_name varchar(64)
-- 	last_name varchar(64)
-- 	dob date
-- 	pokemon_id integer > pokemon.id
-- }


CREATE TABLE pokemon_species(
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) UNIQUE NOT NULL,
    ability VARCHAR(64) NOT NULL,
    type VARCHAR(32) NOT NULL
);

CREATE TABLE pokemon(
    id SERIAL PRIMARY KEY,
    nickname VARCHAR(64),
    level INT NOT NULL,
    attack INT NOT NULL,
    defense INT NOT NULL,
    health INT NOT NULL,
    held_item VARCHAR(32),
    pokemon_species_id INT NOT NULL REFERENCES pokemon_species(id)
);

CREATE TABLE moves(
    id SERIAL PRIMARY KEY,
    power INT NOT NULL,
    status_effect VARCHAR(32),
    accuracy DECIMAL NOT NULL,
    type VARCHAR(32) NOT NULL
);

CREATE TABLE pokemon_moves(
    id SERIAL PRIMARY KEY,
    pokemon_id INT NOT NULL REFERENCES pokemon(id),
    move_id INT NOT NULL REFERENCES moves(id)
);

CREATE TABLE trainers(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(64) NOT NULL,
    last_name VARCHAR(64) NOT NULL,
    dob DATE NOT NULL,
    pokemon_id INT NOT NULL UNIQUE REFERENCES pokemon(id)
);

INSERT INTO pokemon_species (name, ability, type) VALUES
('Pikachu', 'static', 'electric'),
('Jolteon', 'static', 'electric'),
('Charizard', 'blaze', 'fire'),
('Typhlosion', 'blaze', 'fire'),
('Magmar', 'flame body', 'fire'),
('Vaporeon', 'swift swim', 'water');

INSERT INTO pokemon (nickname, level, attack, defense, health, held_item, pokemon_species_id) VALUES
('Puka', 20, 20, 10, 30, 'berry', 1),
('Peeka', 21, 21, 11, 31, 'sitrus berry', 1),
('Gary', 50, 90, 100, 140, NULL, 3),
(NULL, 60, 80, 130, 200, NULL, 6);



