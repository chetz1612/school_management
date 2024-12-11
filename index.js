const express = require("express");
const students = require("./model/Students");
const schools = require("./model/School");
const sequelize = require("./sequelize");
const app = express();
const port = process.env.PORT || 3000;
const { v4: uuidv4 } = require("uuid");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get all Schools
app.get("/api/schools", async (req, res) => {
  try {
    const allSchools = await schools.findAll();
    if (allSchools.length == 0)
      return res.status(200).send("No Record Found...");
    res.status(200).send(allSchools);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send("Internal Server Error...");
  }
});

//create new school
app.post("/api/schools/createSchool", async (req, res) => {
  try {
    const { school_name, registration_no } = req.body;
    const newSchool = await schools.create({
      id: uuidv4(),
      registration_no: registration_no,
      school_name: school_name,
    });
    res
      .status(200)
      .send(`'${newSchool.dataValues.school_name}' created successfully...`);
  } catch (error) {
    console.log("Error while creating school", error);
    res.send("Internal Server Error...");
  }
});

// update the school details
app.put("/api/schools/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [affectedRows, updatedRows] = await schools.update(req.body, {
      where: {
        id: id,
      },
    });
    if (affectedRows > 0) {
      res.status(200).send("Record updated successfully...");
    } else {
      res.send("Record not updated...");
    }
  } catch (error) {
    console.log("error while updating school details...", error);
  }
});

// delete the school record
app.delete("/api/schools/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const deleteSchool = await schools.destroy({
      where: {
        id: id
      }
    });
    if(deleteSchool > 0) {
      res.status(200).send('Record deleted successfully...');
    } else {
      res.status(`Record is not deleted, it might not exist or condition didn't match`)
    }
  } catch (error) {
    console.log('Error while deleting the record: ', error);
  }
})

// Get all students 
app.get("/api/students", async(req, res) => {
  try {
    const allStudents = await students.findAll();
    res.status(200).send(allStudents);
  } catch (error) {
    res.status(500).send('Internal server error...');
  }
})

// create a new student
app.post("/api/students/createStudent", async(req, res) => {
  try {
    const {first_name, last_name, email, mobile_no, school_name, age} = req.body;    
    const newStudent = await students.create({
      id: uuidv4(),
      first_name: first_name,
      last_name: last_name,
      email: email,
      mobile_no: mobile_no,
      school_name: school_name,
      age: age
    });
    res.status(200).send(`New student '${newStudent.dataValues.first_name}' created...`)
  } catch (error) {
    // res.send(500, 'Internal server error...');
    res.status(500).send('Internal server error...');
    console.log('Error while creating student: ', error.errors)
  }
})

// update student's detail
app.put("/api/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [affectedRows, updatedRows] = students.update(req.body, {
      where: {
        id: id
      }      
    });
    if (affectedRows > 0) {
      res.status(200).send("Student's details updated successfully...");
    } else {
      res.send("Record not updated...");
    }
  } catch (error) {
    console.log(`Error while updating the student's detail: `, error);
    res.status(500).send('Internal server error...');
  }
})

// delete a student
app.delete("/api/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteStudent = await students.destroy({
      where: {
        id: id
      }
    });
    if(deleteStudent > 0) {
      res.status(200).send('Record deleted successfully...');
    } else {
      res.status(`Record is not deleted, it might not exist or condition didn't match`)
    }
  } catch (error) {
    console.log("Error: ", error);
  }
});

const syncSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully...");

    await sequelize.sync({ alter: true });
    console.log("Database synchronized...");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`);
    });
  } catch (error) {
    console.log("error: ", error);
  }
};

syncSequelize();
