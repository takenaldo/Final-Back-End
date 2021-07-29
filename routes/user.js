const express = require("express");
const UserModel = require("../models/users");
const Sequelize = require("sequelize");
const bcrypt = require('bcryptjs');
const User = require("../models/users");

const router = express.Router();

router
    .post("/signup", async (req, res) => {

        try {
            let {username, email, password} = req.body;

            let errors = [];
            
            if(!username) errors.push("username");
            if(!email) errors.push("email");
            if(!password) errors.push("password");

            if(errors.length > 0) return res.send({message:`These fields can not be empty ${errors}`})

            const check = await UserModel.findOne({ where: {email:email} })
            if(check) return res.status(400).send({ message:"User already exists", status:false });

            let salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password, salt);

            let user = await UserModel.create({
                username:username,
                password:password,
                email:email
            })

            res.send({message:"User signed up", user})
        } catch (error) {
            console.log("error", error)
            return res.send({message:"Error occurred", error})
        }
    })
    .get('/allUsers', async (req, res) => {

        try {
            const users = await UserModel.findAll()
            return res.send({users})
        } catch (error) {
            console.log("error", error)
            return res.send({message:"Error occurred", error})
        }
    })
    .post('/login', async (req, res) => {
        try {
            
            const {email, password} = req.body
            let errors = [];

            if(!email) errors.push("email");
            if(!password) errors.push("password");

            if(errors.length > 0) return res.send({message:`These fields can not be empty ${errors}`})

            const user = await UserModel.findOne({ where: {email:email} })

            if(!user) return res.status(400).send({ message:"User not found", status:false });

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) return res.status(400).send({ message:"User not found", status:false });

            return res.send({message:"User found",  user})

        } catch (error) {
            console.log("error", error)
            return res.send({message:"Error occurred", error})
        }
    });

module.exports = router;
