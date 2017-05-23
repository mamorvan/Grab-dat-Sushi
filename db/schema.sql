CREATE DATABASE sushi_db;
USE sushi_db;

CREATE table sushi 
(
	id INT NOT NULL AUTO_INCREMENT,
	sushi_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id) 
);