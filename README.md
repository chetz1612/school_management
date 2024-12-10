# School Management System - REST API

## Overview
The School Management System REST API allows seamless management of schools and their associated students. It supports essential CRUD operations while ensuring proper data validation and relational integrity. 

## Features
- Manage schools and students through RESTful API endpoints.
- CRUD operations for both students and schools.
- Validation for student age (must be between 1 and 18).
- PostgreSQL database integration using the Node.js `pg` library.
- Each school can have multiple students.

---

## Entities
### Student
- **id**: Unique identifier for the student.
- **firstName**: First name of the student.
- **lastName**: Last name of the student.
- **email**: Email address of the student.
- **mobileNo**: Contact number of the student.
- **age**: Age of the student (must be between 1 and 18).

### School
- **id**: Unique identifier for the school.
- **schoolName**: Name of the school.
- **registrationNo**: Registration number of the school.

---

## API Endpoints

### Students Endpoints
| HTTP Method | Endpoint      | Description                             |
|-------------|---------------|-----------------------------------------|
| GET         | `/students`   | Retrieve all students.                 |
| POST        | `/students`   | Add a new student (validate age).      |
| PUT         | `/students`   | Update an existing student profile.    |
| DELETE      | `/students`   | Remove a student.                      |

### Schools Endpoints
| HTTP Method | Endpoint      | Description                             |
|-------------|---------------|-----------------------------------------|
| GET         | `/school`     | Retrieve all schools.                  |
| POST        | `/school`     | Add a new school.                      |
| PUT         | `/school`     | Update an existing school.             |
| DELETE      | `/school`     | Remove a school.                       |

---

## Database
### Technology
- PostgreSQL is used as the database management system.
- Node.js `pg` library is utilized for database operations.

### Relationships
- One-to-many relationship: A school can have multiple students.

---

## Setup Instructions
### Prerequisites
- Node.js (version >= 14)
- PostgreSQL

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure database connection in the `.env` file:
   ```env
   DB_HOST=<your-database-host>
   DB_PORT=<your-database-port>
   DB_USER=<your-database-user>
   DB_PASSWORD=<your-database-password>
   DB_NAME=<your-database-name>
   ```
4. Run database migrations (if any):
   ```bash
   npm run migrate
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. Access the API at `http://localhost:<port>`.

---

## Validation Rules
- **Student Age**: Age must be between 1 and 18. The server will reject requests with invalid age values.

---

## Future Enhancements
- Add authentication and authorization for secure access.
- Implement pagination for large datasets.
- Create a front-end interface for easier management.
- Add logging and monitoring.

---

## Contributing
1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/<feature-name>
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add <description-of-change>"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/<feature-name>
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.
