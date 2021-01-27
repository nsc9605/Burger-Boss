ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;

USE `burgers_db`;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);