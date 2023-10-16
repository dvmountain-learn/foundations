CREATE TABLE users (
	id serial PRIMARY KEY,
	first_name varchar(25) NOT NULL,
	last_name varchar(25) NOT NULL,
	dob DATE,
	email varchar(50) NOT NULL,
	password varchar(25) NOT NULL,
	address varchar(100),
	status BOOLEAN NOT NULL DEFAULT 'true',
	created_date date NOT NULL,
	updated_date date NOT NULL
);

CREATE TABLE groceries (
	id serial PRIMARY KEY,
	name varchar(50) NOT NULL,
	banner TEXT,
	logo TEXT NOT NULL,
	address varchar(100) NOT NULL,
	tel varchar(20) NOT NULL,
	bio TEXT NOT NULL,
	status BOOLEAN NOT NULL DEFAULT 'true',
	created_date date NOT NULL,
	updated_date date NOT NULL,
	user_id integer NOT NULL REFERENCES users(id) 
);

CREATE TABLE quantities (
	id serial PRIMARY KEY,
	number FLOAT NOT NULL,
	unit varchar(5) NOT NULL,
	status BOOLEAN NOT NULL DEFAULT 'true',
	created_date date NOT NULL,
	updated_date date NOT NULL
);

CREATE TABLE ingredients (
	id serial PRIMARY KEY,
	name varchar(50) NOT NULL,
	status BOOLEAN NOT NULL DEFAULT 'true',
	created_date date NOT NULL,
	updated_date date NOT NULL,
	quantity_id integer NOT NULL REFERENCES quantities(id)
);

CREATE TABLE instructions (
	id serial PRIMARY KEY NOT NULL,
	cook_time TIME NOT NULL,
	temperature varchar(10) NOT NULL,
	status BOOLEAN NOT NULL DEFAULT 'true',
	created_date date NOT NULL,
	updated_date date NOT NULL
);

CREATE TABLE recipes (
	id serial PRIMARY KEY NOT NULL,
	title varchar(50) NOT NULL,
	marked BOOLEAN NOT NULL DEFAULT 'true',
	grocery_id integer NOT NULL REFERENCES groceries(id),
	ingredient_id integer NOT NULL REFERENCES ingredients(id),
	instruction_id integer NOT NULL REFERENCES instructions(id),
	status BOOLEAN NOT NULL DEFAULT 'true',
	created_date date NOT NULL,
	updated_date date NOT NULL
);

INSERT INTO users(first_name, last_name, dob, email, password, address) VALUES
('Senghort', 'Kheang', NULL, 'senghort.rupp@gmail.com', 'zaq12345', 
 '708 Almaroad PL SW, Jacksonville, AL-35265', date, '');
