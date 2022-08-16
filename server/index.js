require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();

const User = require('./models/user.schema');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({success: 'ok', message: "Test"});
});

app.post('/login', (req,res) => {
    if(!req.body.password || !req.body.login){
        res.status(403).json({msg: "Email or password wasn't provided"});
        return;
    } 

    User.findOne({name: req.body.login})
    .then(user => {
        if(!user){
            res.status(400).json({msg: "User does not exist"});
        } else {
            if(!bcrypt.compareSync(req.body.password, user.password)){
                res.status(400).json({msg: "Password for user is wrong"});
            } else {
                const token = jwt.sign({id: user._id, email: user.email, name:user.name}, process.env.SECRET, {expiresIn: "1000s"});
                res.json({token: token});
            }
        }
    }).catch(err => {
        console.log(err);
    });
});

app.post('/signup', (req,res) => {

    if(!req.body.email || !req.body.password || !req.body.login){
        res.json({msg: "Not provided"}).status(404);
    }

    User.create({
        name: req.body.login,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }).then((user) => {
        const token = jwt.sign({id: user._id, email: user.email}, process.env.SECRET, {expiresIn: "500s"});
        res.json({status: 'success', token: token});
    })
    .catch(err => {
        console.log(err);
    });

});

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGO_URI, () => {
        console.log("Connection established!");
    });
});
