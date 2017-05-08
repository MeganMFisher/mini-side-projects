SELECT *
FROM vehicles
JOIN users
    ON users.id = vehicles.owner_id
WHERE  users.firstname LIKE $1;