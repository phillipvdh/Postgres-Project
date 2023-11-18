# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

Architecture:

API Endpoints

Product name chosen is forged_weapons:

- Index: = '/product' [GET] 

- Show (args: product id): = '/product/:id' [GET]

- Create (args: Product)[token required]: = 'product' [POST] = 

<!-- this is the token for CREATE  -->
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJQcm9kdWN0IE5hbWUiLCJuYW1lIjoiYnVsbHNleWUiLCJpYXQiOjE1MTYyMzkwMjJ9.IyL3uMkVe72BtldTbOGFonQlY1LPeXPDeBt2_rMbx08

<!-- - [OPTIONAL] Top 5 most popular products  --> not adding this
<!-- - [OPTIONAL] Products by category (args: product category) --> not adding this

Users:

<!-- this is the token for index-->
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVc2VycyIsIm5hbWUiOiJVc2VycyIsImlhdCI6MTUxNjIzOTAyMn0.CDXflAkVsOX9f5DHwLct06184a7x9VxziuipavVxO9k

- Index [token required]: = '/Users' [GET]

<!-- this is the token for show -->
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVc2VycyIsIm5hbWUiOiJVc2VycyIsImlhdCI6MTUxNjIzOTAyMn0.CDXflAkVsOX9f5DHwLct06184a7x9VxziuipavVxO9k

- Show (args: id)[token required]: = '/id' [GET]

<!-- this is the token for create -->
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVc2VycyIsIm5hbWUiOiJVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.SqcpEMmdYxAEO9QjtvSYN5Fad0VDF1NVIMKGtEV6OMo

- Create (args: User)[token required]: = '/User' [POST]

Orders:

<!-- this is the token for orders -->
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJPcmRlcnMiLCJ1c2VyIjoiaWQiLCJpYXQiOjE1MTYyMzkwMjJ9.nLMbkWX0r8TiESYiZlJ56KooCHs_p5DyqV7HEoCRBcM

- Current Order by user (args: user id)[token required]: [SELECT * FROM user ORDER BY id]

<!-- - [OPTIONAL] Completed Orders by user (args: user id)[token required] -->

Data Shapes:

Product:

-  id
- name
- price
<!-- [OPTIONAL] category --> not adding this

CREATE DATABASE forged_weapons;
\c forged_weapons

<!-- create a table -->
CREATE TABLE forged_weapons 
(id SERIAL PRIMARY KEY, name VARCHAR(100), price integer);

<!-- now we will be storing information in our table -->
INSERT INTO forged_weapons (name, price)
VALUES ('Knife', 750),
('Bow', 1899),
('Gun', 3050),
('Sword', 2541);

forged_weapon=#  SELECT * FROM forged_weapons;

 id | name  | price 
----+-------+-------
  1 | Knife |   750
  2 | Bow   |  1899
  3 | Gun   |  3050
  4 | Sword |  2541
(4 rows)

User:

- id
- firstName
- lastName
- password


CREATE DATABASE shopping_user;
\c shopping_user

<!-- create a table -->
CREATE TABLE shopping_user (id SERIAL PRIMARY KEY, username VARCHAR(100), lastname VARCHAR(100), password VARCHAR(50));

<!-- now we will be storing information in our table -->
INSERT INTO shopping_user (username, lastname, password)
VALUES ('John', 'Enslin', 'mdteklvtsr'),
('Anton', 'Denton', 'mmmvgdrae'),
('Jonathan', 'Brown', 'nchfgertae'),
('Craig', 'Edwards', 'ofghettry');

shopping_user=#  SELECT * FROM shopping_user;

 id | username | lastname |  password  
----+----------+----------+------------
  1 | John     | Enslin   | mdteklvtsr
  2 | Anton    | Denton   | mmmvgdrae
  3 | Jonathan | Brown    | nchfgertae
  4 | Craig    | Edwards  | ofghettry
(4 rows)

Orders:

- id:
- id of each product in the order: 
- quantity of each product in the order: 
- user_id:
- status of order (active or complete): 

CREATE DATABASE orders;
\c orders

<!-- create a table -->
CREATE TABLE orders (id SERIAL PRIMARY KEY, product_id integer, quantity integer, shopper_user_id integer, status VARCHAR(100));

<!-- now we will be storing information in our database -->
INSERT INTO orders (product_id, quantity, shopper_user_id, status)
VALUES (2515584, 1, 1, 'Active'),
(2525848, 1, 2, 'Active'),
(2536587, 1, 3, 'Complete'),
(2542585, 1, 4, 'Complete');

orders=#  SELECT * FROM orders;

 id | product_id | quantity | shopper_user_id |  status  
----+------------+----------+-----------------+----------
  1 |    2515584 |        1 |               1 | Active
  2 |    2525848 |        1 |               2 | Active
  3 |    2536587 |        1 |               3 | Complete
  4 |    2542585 |        1 |               4 | Complete
(4 rows)

