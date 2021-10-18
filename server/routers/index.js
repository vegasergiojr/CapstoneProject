const { sequelize } = require("../models")
router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});



router.get('/:id/leave-comment', async(req, res) => {
    const blogs_by_id = await models.Comment.findAll({
        where: {
            blog_id: req.params.id
        }
    })

    res.json(blogs_by_id)
})

router.post('/leave-comment', async(req, res) => {
    const { bodyText, blogId } = req.body

    const comment = await models.Comment.create({
        body_text: bodyText,
        blog_id: blogId
    })

    res.json({ success: true, oneComment: comment.dataValues })
})



module.exports = router