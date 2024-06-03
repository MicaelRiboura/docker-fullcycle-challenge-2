USE nodedb;

CREATE TABLE people (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO people(name) VALUES('Wesley');
INSERT INTO people(name) VALUES('Arthur');
INSERT INTO people(name) VALUES('Marcos');