const express = require('express');
let data = require('./data');
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

app.use(bodyParser.json());

app.get('/profiles', function(req,res){
    return res.status(200).json(data);
});

app.get('/profile/:id', function(req,res){
    let profile;
    let id = req.params.id;
    for (let i=0; i<data.length; i++) {
        if (data[i].id === id) {
            profile = data[i];
        }
    }
    if (profile === undefined) {
        return res.status(400).send("Invalid User Profile Id");
    } else {
        return res.status(200).json(profile);
    }   
});

app.post('/profile', function(req,res){
    const person = req.body;
    person.id = v4();
    if (person.name !== undefined) {
       //Save new person in database 
       data.push(person);
       return res.status(200).send('Successfully added person');
    } else {
        return res.status(400).send("Invalid person");
    }
});

app.put('/profile', function(req,res){
    let user = req.body;
    for (let i=0; i<data.length; i++) {
        if (data[i].id === user.id) {
            data[i]= user;
            return res.json({msg:"Profile Updated"});
        }
    }
    return res.status(400).json({error:"Profile not updated"});
});

app.delete('/profile/:id', function(req,res){
    const id = req.params.id;
    if (id===undefined) {
        return res.send(400);
    }
    let index = -1;
    for (let i=0; i<data.length; i++) {
        if (data[i].id === id) {
            index = i;
        }
    }
    if (index === -1) {
        return res.send(400);
    }
    data = data.slice(0,index).concat(data.slice(index+1));
    return res.status(200).json({msg: "Profile successfully deleted"});
});


app.listen(PORT, function(){
    console.log(`Server is listening on ${PORT}`);
});