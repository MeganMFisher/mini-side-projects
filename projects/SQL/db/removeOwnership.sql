UPDATE vehicles
SET owner_id = 0
WHERE owner_id = $1;