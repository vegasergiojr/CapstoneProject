const express = require('express')
const models = require('./models')
const cors = require('cors')
const db = require('./models')
const app = express() 

const authenticate = ('./middleware/authMiddleware')
const PORT = process.env.PORT || 8080

require('dotenv').config()

app.use(express.json())
app.use(cors())

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

    const postd = parseInt(req.params.postId) 

    models.Post.destroy({
        where: {
            id: postId
        }
    }).then(_  => {
        res.json({success: true})
    })

})



app.listen(PORT, (req, res) => {
    console.log('Server is running...')
})