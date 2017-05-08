SELECT vehicles.make, vehicles.model, vehicles.year, users.firstname, users.lastname
FROM vehicles
JOIN users
    ON users.id = vehicles.owner_id
WHERE year > 2000
ORDER BY year DESC;