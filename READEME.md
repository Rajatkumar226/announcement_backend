### NodeJs Setup:-

Create project setup `npm init -y`

`npm install express mysql2 sequelize`

To run project `node index.js`

For backend `(http://localhost:3000)`

### Features

`Create, View, Update, and Delete announcements`

`Rich Text Editor (SunEditor) support`

`Page navigation with React Router`

`Local date display`

`Dynamic list rendering`

`Confirmation popup for delete`

`Clean modular SCSS styling`

Backend Dependencies that I use:-

### `express` Web framework to create RESTful APIs

### `mysql2` Allows connection to MySQL database

### `sequelize` ORM (Object Relational Mapper) to simplify database queries and models

### `Nodemon` used to automatically restart the server whenever file changes

API Endpoints:-

GET http://localhost:3000/api/announcements `Fetch all announcements`

GET http://localhost:3000/api/announcements/:id `Fetch a single announcement by its ID`

POST http://localhost:3000/api/announcements `Create a new announcement`

PUT http://localhost:3000/api/announcements/:id `Update an existing announcement by ID`

DELETE http://localhost:3000/api/announcements/:id `Delete an announcement by ID`

### `Built by Rajat with ❤️`
