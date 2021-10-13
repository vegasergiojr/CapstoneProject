global.express = require('express')
global.models = require('./models')
const cors = require('cors')
const db = require('./models')
const app = express() 
const indexRouter = require('./routers/index')
global.session = require('express-session')

const authenticate = ('./middleware/authMiddleware')
const PORT = process.env.PORT || 8080

require('dotenv').config()

app.use(express.json())
app.use(cors())
app.use('/', indexRouter)
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.post('/api/post', (req, res) => {

    const body_text = req.body.body_text
    const image = req.body.image 


    const post = models.Post.build({
        body_text: body_text, 
        image: image, 
    
    })

    // save a post
    post.save()
    .then(savedPost => {
        res.json({success: true, postId: savedPost.id})
    })

})

app.get('/api/post',(req, res) => {
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
    }).then(_  => {
        res.json({success: true})
    })

})





//UserInfo

app.post('/api/info', (req, res) => {

    const about_me = req.body.about_me




    const info = models.Edit.build({
        about_me: about_me,

    
    })

    // save a info
    info.save()
    .then(savedInfo => {
        res.json({success: true, infoId: savedInfo.id})
    })

})

app.get('/api/info',(req, res) => {
    // get all info
    models.Edit.findAll({})
    .then(info => {
        res.json(info )
    })
})

app.delete('/api/info/:infoId', (req, res) => {

    const infoId = parseInt(req.params.infoId) 

    models.Edit.destroy({
        where: {
            id: infoId
        }
    }).then(_  => {
        res.json({success: true})
    })

})











app.listen(PORT, (req, res) => {
    console.log('Server is running...')
})