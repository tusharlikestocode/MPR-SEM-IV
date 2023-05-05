const express = require("express");
const app = express();
require("./db/conn");
const Student = require("./models/students");
// const mongoose = require("mongoose");
//below line will automatically used the port alloted to it, if not alloted then it will use port 8000
const port = process.env.PORT || 3001;

app.use(express.json());


//POST
// create a new student using promise
// app.post("/students", (req, res) => {

//     console.log(req.body);
//     const user = new Student(req.body);

//     user.save().then(() => res.status(201).send(user))
//     .catch((e) => res.status(400).send(e));
// });

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
//POST
// creating a new student using async/await 
app.post("/students", async(req, res) => {
    try{
        console.log('hello')
        const user = new Student(req.body);
        console.log(user);
        const createUser = await user.save();
        res.status(201).send(createUser);

    }catch(e){ res.status(400).send(e) }

})


//GET
//All members of student list
app.get("/students", async(req, res) => {
    try{
        const studentsData = await Student.find(); //bcz .find() returns a promise like .save()
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

// GET
//only one single student based upon the 'id'
app.get("/students/:email", async(req, res) => {
    try{
        const _email = req.params.email;
        const studentData = await Student.find(({email:_email}));

        // to check if data is valid or not
        if(!studentData){
            res.status(404).send();
        }else{
            res.send(studentData);
        }
    }catch(e){
        res.status(500).send(e);
}
});

app.get("/students", async (req, res) => {
    try {
        const email = req.params.email;
        const studentData = await Student.findOne({ email: email });

        // to check if data is valid or not
        if (!studentData) {
            res.status(404).send();
        } else {
            res.send(studentData);
        }
    } catch (e) {
        res.status(500).send(e);
    }
});


//UPDATE
//by using id
app.patch("/students/:email", async(req, res) => {
    try{
        const _email = req.params.email;
        const updateStudents = await Student.findOneAndUpdate(({email:_email}), req.body, {
            new : true
        });
        res.send(updateStudents);
    }catch(e){
        res.status(404).send(e);
    }
})


//DELETE
app.delete("/students/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);

        if(!_id){
            return res.status(400).send();
        }
        else{
            res.send(deleteStudent);
        }
    }catch(e){
        res.status(400).send(e);
    }
})

app.listen(port, () => {
    console.log(`connection is set up at ${port}`);
});