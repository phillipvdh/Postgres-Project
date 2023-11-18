Connecting to the database:

1. switch to the postgres user: su postgres
2. start: psql psql postgres

in psql run the following:

3. CREATE USER shopping_user WITH PASSWORD 'password123';
4. CREATE DATABASE shopping;
5. \c shopping
6. GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user;

Package instalations:

1. install yarn npm install yarn -g
2. install db-migrate on the machine for terminal commands npm install db-migrate -g
3. check node version node -v - it needs to be 10 or 12 level

IMPORTANT: IF node was not 10 or 12 level, run the following:

4. npm install -g n
5. n 10.18.0
6. PATH="$PATH"
7. node -v to check that the version is 10 or 12
8. install all project dependencies yarn
9. to test that it is working, run yarn watch should show an app starting on 0.0.0.0:3000


