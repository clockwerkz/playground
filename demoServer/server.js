const express = require('express');
let data = require('./data');
require('dotenv').config(); 
const User = require('./models/User');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { v4 } = require('uuid');
//Nodemon NPM website:
//https://www.npmjs.com/package/nodemon

const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/hello', function (req, res){
//     console.log(req.query);
//     res.send(`<h1>Hello from the ${req.query.name}!</h1>`);
// });

mongoose.connect(process.env.DB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
 })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.error("Error:",err));
app.use(bodyParser.json());


app.get('/profile/:id', function(req,res){
    let id = req.params.id;
    User.findById(id)
    .then(user => res.status(200).send(user))
    .catch(err => res.status(400).send({ err : "User Profile Not Found" }));
});

app.post('/profile', function(req,res){
    const profile = req.body;
    if (profile.email !== undefined) {
       //Save new person in database 
        const newUser = new User(profile);
        newUser.save()
        .then(user => res.status(200).send(user))
        .catch(err => res.status(400).send({ err }));
    } else {
        return res.status(400).send("Invalid person");
    }
});


app.put('/profile/:id', function(req,res){
    let id = req.params.id;
    let profile= req.body;
    User.findByIdAndUpdate(id, {$set: { ...profile }}, {new: true})
    .then(user => res.status(200).send(user))
    .catch(err => res.status(400).send({ err }));
});

app.delete('/profile/:id', function(req,res){
    const id = req.params.id;
    User.findByIdAndDelete(id)
    .then(user => {
        if (user!==null) {
            res.status(200).send({msg : `User id ${id} was successfully deleted.`});
        } else {
            res.status(400).send({ err: "User Not Found" });
        }
    })
    .catch(err => res.status(400).send({ err }));
});


app.listen(PORT, function(){
    console.log(`Server is listening on ${PORT}`);
});