-- CREATE TABLE IF NOT EXISTS users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(50) NOT NULL,
--     email VARCHAR(100) NOT NULL UNIQUE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Create products table
-- CREATE TABLE IF NOT EXISTS products (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description TEXT,
--     price DECIMAL(10, 2) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- INSERT INTO users (username, email)
-- VALUES ('test_user', 'test_user@example.com');

-- -- Insert products into the products table
-- INSERT INTO products (name, description, price) 
-- VALUES 
-- ('Product 1', 'Description of Product 1', 100.00),
-- ('Product 2', 'Description of Product 2', 200.00),
-- ('Product 3', 'Description of Product 3', 150.00);

-- Add a role column to the users table
-- ALTER TABLE users
-- ADD COLUMN role VARCHAR(20) DEFAULT 'user';

-- -- Insert a user with a specific role
-- INSERT INTO users (username, email, role)
-- VALUES ('admin_user', 'admin_user@example.com', 'admin'),
--        ('regular_user', 'regular_user@example.com', 'user');

-- -- Update role for an existing user
-- UPDATE users
-- SET role = 'admin'
-- WHERE username = 'test_user';  -- Replace 'test_user' with the actual username

-- -- View all users along with their roles
-- SELECT * FROM users;

-- -- Delete the users table
-- DROP TABLE IF EXISTS users;


