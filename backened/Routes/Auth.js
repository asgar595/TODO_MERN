const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require("bcryptjs");


router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

  
    if (!email || !username || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "Email already registered" });
    }

    const hashPassword = bcrypt.hashSync(password, 10);  

    try {
        const newUser = new User({ email, username, password: hashPassword });
        await newUser.save();
        
        
        const { password: userPassword, ...userResponse } = newUser._doc;
        res.status(200).send({ user: userResponse });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send({ error: "Failed to register user" });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;  

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Please sign up first" }); 
        }

        const isPassword = bcrypt.compareSync(password, user.password);
        if (!isPassword) {
            return res.status(400).json({ message: "Incorrect password" }); 
        }

      
        const { password: userPassword, ...others } = user._doc;
        
        res.status(200).json({ message: "Login successful", user: others });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).send({ error: "Failed to log in user" });
    }
});

module.exports = router;
