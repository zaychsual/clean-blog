const Article = require('../models/article.model')

exports.index = async (req, res) => {
    let indexs = await Article.find()
    res.render('index', {
        data: indexs
    })
}