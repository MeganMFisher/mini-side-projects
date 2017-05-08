UPDATE vehicles
SET owner_id = $2
WHERE ID = $1;