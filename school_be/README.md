
# School Management

'School Management System' allows seamless management of schools and their associated students. This backend system allows to perfom operation like: 'create, delete, update, get - for school and students'. 


## Authors

- [@chetz1612](https://github.com/chetz1612)


## API Reference

#### Get all schools, students

```http
  GET /school
  GET /student
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get specific school, student

```http
  GET /school/${id}
  GET /student/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id to fetch |

#### POST create a school, student

```http
  POST /school/
  POST /student/
```

#### PUT Update a school, student

```http
  PUT /school/${id}
  PUT /student/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id to update |

#### DELETE Delete a school, student

```http
  DELETE /school/${id}
  DELETE /student/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id to delete |



## Features

- Manage schools and students through RESTful API endpoints.
- CRUD operations for both students and schools.
- Validation for student age (must be between 1 and 18).
- PostgreSQL database integration using the Node.js `pg` library.
- Each school can have multiple students.

## Installation

1. Clone the repository:
   ```bash
   https://github.com/chetz1612/school_management.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure database connection in the `.env` file:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=chetan
   DB_PASSWORD='chetan123'
   DB_NAME=mydb
   ```
4. Run database migrations (if any):
   ```bash
   npm run migrate
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. Access the API at `http://localhost:3000`.
```

# Hi, I'm Chetan Chauhan! 👋

## 🚀 About Me 
I'm a full stack developer. 
I have worked in many project as a Angular and React Developer.


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chetan-chauhan-403770107/)

## 🛠 Skills
HTML 
CSS 
Javascript 
Typescript 
React
Angular 
NodeJS

