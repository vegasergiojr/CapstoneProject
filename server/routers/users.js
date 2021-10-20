var express = require('express');
var router = express.Router();
const models = require('../models')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
require('dotenv').config()


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

    const persistedUser = models.User.findOne({
        where: {
            username: username
        }
    }).then(user => {
        bcrypt.compare(password, user.password, (error, result) => {
            if (result) {
                const token = jwt.sign({ username: username, user_id: user.id }, process.env.JWT_SECRET_KEY)
                res.json({ success: true, token: token })
            }
            else {
                console.log(error)
                res.json({ success: false, message: 'user not authenticated!' })
            }
        })
    })
})


router.put('/edit-profile', (req, res) => {
    
    const user_id = req.body.user_id
    const about_me = req.body.about_me
    const cont1 = req.body.cont1
    const cont2 = req.body.cont2
    const cont3 = req.body.cont3
    const cont4 = req.body.cont4
    const cont5 = req.body.cont5
    const link1 = req.body.link1
    const link2 = req.body.link2
    const link3 = req.body.link3
    const link4 = req.body.link4
    const link5 = req.body.link5
    
    models.User.update(
        {
            about_me: about_me,
            cont1: cont1,
            cont2: cont2,
            cont3: cont3,
            cont4: cont4,
            cont5: cont5,
            link1: link1,
            link2: link2,
            link3: link3,
            link4: link4,
            link5: link5
        },
        {
            where: { id: user_id }
        }
    ).then(updatedUser => {
        console.log(updatedUser)
        res.json({success: true})
    })
})

router.get('/:user', (req, res) => {
    const user = models.Users.findByPk(req.params.id)
    res.status(201).json(user)


})





module.exports = router;
