global.express = require('express')
global.models = require('./models')
const cors = require('cors')
const db = require('./models')
const app = express()
const indexRouter = require('./routers/index')
global.session = require('express-session')
var usersRouter = require('./routers/users');
var editProfile = require('./routers/editprofile');


const jwt = require('jsonwebtoken')
const user = require('./models/user')
const authenticate = ('./middlewares/authenticationMW')
const PORT = process.env.PORT || 8080

require('dotenv').config()

app.use(express.json())
app.use(cors())
app.use('/', indexRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/editprofile', editProfile)
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.post('/api/post', (req, res) => {

    const body_text = req.body.body_text
    const user_id= req.body.user_id

    const post = models.Post.build({
        body_text: body_text,
        user_id:user_id,

    })

    // save a post
    post.save()
        .then(savedPost => {
            res.json({ success: true, postId: savedPost.id })
        })

})

app.get('/api/post', (req, res) => {
    // get all posts
    models.Post.findAll({})
        .then(posts => {
            res.json(posts)
        })
})

app.delete('/api/post/:postId', (req, res) => {

    const postId = parseInt(req.params.postId)

    models.Post.destroy({
        where: {
            id: postId
        }
    }).then(_ => {
        res.json({ success: true })
    })

})





// //UserInfo

// app.put('/api/info', (req, res) => {

//     const about_me = req.body.about_me
//     const cont1 = req.body.cont1
//     const cont2 = req.body.cont2
//     const cont3 = req.body.cont3
//     const cont4 = req.body.cont4
//     const cont5 = req.body.cont5
//     const link1 = req.body.link1
//     const link2 = req.body.link2
//     const link3 = req.body.link3
//     const link4 = req.body.link4
//     const link5 = req.body.link5


//     const info = models.Edit.build({
//         about_me: about_me,
//         cont1: cont1,
//         cont2: cont2,
//         cont3: cont3,
//         cont4: cont4,
//         cont5: cont5,
//         link1: link1,
//         link2: link2,
//         link3: link3,
//         link4: link4,
//         link5: link5,


//     })

//     // save a info
//     info.save()
//         .then(savedInfo => {
//             res.json({ success: true, infoId: savedInfo.id })
//         })

// })

// app.get('/api/info', (req, res) => {
//     // get all info
//     models.Edit.findAll({})
//         .then(info => {
//             res.json(info)
//         })
// })

// app.delete('/api/info/:infoId', (req, res) => {

//     const infoId = parseInt(req.params.infoId)

//     models.Edit.destroy({
//         where: {
//             id: infoId
//         }
//     }).then(_ => {
//         res.json({ success: true })
//     })
// })

app.listen(PORT, (req, res) => {
    console.log('Server is running...')
})




module.exports = app;