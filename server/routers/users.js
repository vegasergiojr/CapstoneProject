var express = require('express');
var router = express.Router();
const { sequelize } = require('../models')
const bcrypt = require('bcrypt');


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


// Handling registration

router.post("/register", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const salt = await bcrypt.hash(password, 10)
    const email = req.body.email
    const user = await models.User.create({
        username: username,
        password: salt,
        first_name: first_name,
        last_name: last_name,
        email: email
    })
    console.log(user)
    res.status(201).json(user)
})

// Handling Login
router.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const persistedUser = users.find(user => {
        return user.username == username && user.password == password;
    })

    if (persistedUser) {
        const token = jwt.sign({ username: username }, process.env.JWT_SECRET_KEY)
        res.json({ success: true, token: token })
    }
    else {
        res.json({ success: false, message: 'user not authenticated!' })
    }
})

module.exports = router;
