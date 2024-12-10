require("dotenv").config();
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

// database connection
const client = require("./db");

const PORT = process.env.PORT || 3000;

app.use(express.json());

// get all students
app.get("/api/students", async (req, res) => {
  try {
    const response = await client.query("SELECT * FROM students");
    res.json(response.rows);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send("Error");
  }
});

// create new student
app.post("/api/students/createStudent", async (req, res) => {
  const { firstName, lastName, email, mobileNo, age } = req.body;
  const studId = uuidv4();
  try {
    if (age > 18) return res.status(400).send("Invalid age");
    const response = await client.query(`
      INSERT INTO students(
        id, firstname, lastname, email, mobileno, age
      ) VALUES(
        '${studId}', '${firstName}', '${lastName}', '${email}', ${mobileNo}, ${age}
      )`);
    res.status(200).send("Student created successfully...");
  } catch (error) {
    console.log("error while creating student");
    res.status(400).send("404: Error while creating student.");
  }
});

// remove a student
app.delete(`/api/students/:id`, async (req, res) => {
  try {
    let { id } = req.params;
    const response = await client.query(
      `DELETE FROM students WHERE id = '${id}'`
    );
    if (response.rowCount == 0)
      return res.status(404).send("Record not found...");
    res.status(200).send("Record deleted successfully...");
  } catch (error) {
    console.log("Error while deleting record...");
  }
});

// update student's details
app.patch("/api/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const requestBody = req.body;
    if (requestBody && Object.keys(requestBody).length > 0) {
      let clause = Object.keys(requestBody)
        .map((key, index) => {
          return !["firstName", "lastName", "email"].includes(key)
            ? `${key} = ${requestBody[key]}`
            : `${key} = '${requestBody[key]}'`;
        })
        .join(", ");

      const query = `UPDATE students SET ${clause} WHERE id = '${id}'`;
      const response = await client.query(query);
      if (response.rowCount == 1) {
        return res.status(200).send(`Student's record updated...`);
      } else {
        return res.status(404).send("Record not found...");
      }
    } else {
      return res.status(400).send("No fields provided for update");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error...");
  }
});


// get all schools
app.get('/api/schools', async (req, res) => {
  const query = `SELECT * FROM schools`;
  const response = await client.query(query);
  if(response.rowCount > 0) {
    return res.json(response.rows)
  } else {
    return res.send('Record not found')
  }
})

// delete school
app.delete('/api/schools/:id', async (req, res) => {
  const { id } = req.params;
  const response = await client.query(`DELETE FROM schools WHERE id = '${id}'`)
  if(response.rowCount == 0) return res.status(404).send('Record not found...')
  res.status(200).send('Record deleted successfully');
})

// create new school
app.post('/api/schools/createSchool', async (req, res)=> {
  const { schoolName, registrationNo } = req.body;
  const schoolId = uuidv4();
  try {
    const query = `INSERT INTO schools (
      id, 
      schoolName,
      registrationNo
    ) VALUES (
      '${schoolId}',
      '${schoolName}',
      ${registrationNo}
    )`;
    const response = await client.query(query);
    res.status(200).send('New school added successfully...');    
  } catch (error) {
    console.log('Error while creating school...', error);
    res.status(500).send('Internal server error...')
  }
})

// update school
app.patch('/api/schools/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const requestBody = req.body;
    if (requestBody && Object.keys(requestBody).length > 0) {
      let clause = Object.keys(requestBody)
        .map((key, index) => {
          return !["schoolName"].includes(key)
            ? `${key} = ${requestBody[key]}`
            : `${key} = '${requestBody[key]}'`;
        })
        .join(", ");

      const query = `UPDATE schools SET ${clause} WHERE id = '${id}'`;
      const response = await client.query(query);
      if (response.rowCount == 1) {
        return res.status(200).send(`School's record updated...`);
      } else {
        return res.status(404).send("Record not found...");
      }
    } else {
      return res.status(400).send("No fields provided for update");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error...");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
