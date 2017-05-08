-- It may be helpful to drop and reinstantilize the table when doing
-- the tests in case you delete users/cars the tests are expecting to see
DROP TABLE IF EXISTS vehicles;

CREATE TABLE vehicles
(
  id SERIAL PRIMARY KEY,
  make VARCHAR(40),
  model VARCHAR(40),
  year INTEGER,
  owner_id INTEGER REFERENCES users(id)
);

INSERT INTO vehicles(make, model, year, owner_id) VALUES('Toyota', 'Camry', 1991, 1);
INSERT INTO vehicles(make, model, year, owner_id) VALUES('Honda', 'Civic', 1995, 1);
INSERT INTO vehicles(make, model, year, owner_id) VALUES('Ford', 'Focus', 2005, 1);
INSERT INTO vehicles(make, model, year, owner_id) VALUES('Ford', 'Taurus', 2003, 2);
INSERT INTO vehicles(make, model, year, owner_id) VALUES('VW', 'Bug', 2010, 2);
INSERT INTO vehicles(make, model, year, owner_id) VALUES('Mini', 'Coup', 2013, 3);
