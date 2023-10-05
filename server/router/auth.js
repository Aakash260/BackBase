const express = require('express');
const jwt = require('jsonwebtoken')
require('../db/conn.js')
const User = require('../models/UserSchema.js')
const bcrypt2 = require('bcrypt');
const authenticate = require('../middleware/authenticate.js')


const router = express.Router();


router.get(`/`, (req, res) => {
    res.send('Hello World From Router Server')
})

router.get('/about', authenticate, (req, res) => {
    res.send(req.rootuser)
})

router.post('/getdata', authenticate, async (req, res) => {
    res.send(req.rootuser)
})
router.post('/contact', authenticate, async(req, res) => {
    try {
        const { name, email, phone, message } = req.body
        if (!name || !email || !phone || !message) {
            console.log('error in contact form')
            return res.json({ error: 'Please Fill the Field' })
        }
        const userContact = await User.findOne({ _id: req.userId })
         
        if(userContact){
             const usermessage=await userContact.addMessage(name,email,phone,message)
             await userContact.save()
             res.status(201).json({message:'user contact successfully'})
        }
    } catch (error) {

    }
})

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Emply Field Not allowed" })
    }
    try {
        const response = await User.findOne({ email: email })
        if (response) {
            return res.status(422).json({ error: "Already Registerd" })
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password and CurrentPassword should be Same" })
        }
        else {

            const hashed = await bcrypt2.hash(password, 10)
            const c_hashed = await bcrypt2.hash(cpassword, 10)

            const user = new User({ name, email, phone, work, password: hashed, cpassword: c_hashed })
            await user.save();

            res.status(201).json({ message: "Successfully Registerd" })
        }


    } catch (error) {
        console.log(error)
    }
})


router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: "Please Fill the DATA" })
        }
        const isLogin = await User.findOne({ email: email })
        if (!isLogin) {
            return res.status(400).json({ error: "Not Registered" })
        }


        const isMatch = await bcrypt2.compare(password, isLogin.password)
        if (isMatch) {
            token = await isLogin.generateAuthToken()

            res.cookie("user", token, { expires: new Date(Date.now() + 25892000000), httpOnly: true });

            return res.status(200).json({ success: "Logged In" })
        }

        res.status(400).json({ error: "Invalid Credentials" })

    } catch (error) {
        console.log(error)
    }
})

router.get('/logout',(req,res)=>{
     
    res.clearCookie('user')
    res.status(200).send('UserLogout')
})

module.exports = router