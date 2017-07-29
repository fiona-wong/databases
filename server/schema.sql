CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT(5) NOT NULL AUTO_INCREMENT,
  text VARCHAR(140) NOT NULL,
  username INT(5) NOT NULL REFERENCES users(id),
  -- room INT(5) REFERENCES rooms(id),
  PRIMARY KEY (id)

);

CREATE TABLE users (
  id INT(5) NOT NULL,
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

-- CREATE TABLE rooms (
--   id INT(5) NOT NULL,
--   roomname VARCHAR(20) NOT NULL,
--   PRIMARY KEY (id)
  
-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

