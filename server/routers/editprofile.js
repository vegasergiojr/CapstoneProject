const { sequelize } = require("../models")

router = express.Router()


router.post('/edit-profile', (req, res) => {
    
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

    const edit = models.Edit.build({
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
        link5: link5,
    })

    edit.save()
    .then(savedEdit => {
        res.json({success: true, editId: savedEdit.id})
    })
})

router.get('/edit-profile', (req, res) => {
    models.Edit
})


module.exports = router