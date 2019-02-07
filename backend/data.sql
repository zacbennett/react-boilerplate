DROP TABLE strings;

DROP DATABASE dmi;

CREATE DATABASE dmi;

\c "dmi"

CREATE TABLE strings(
    id SERIAL PRIMARY KEY,
    data TEXT
);



INSERT INTO strings (data) VALUES
    ('First String'),
    ('Second String');
         