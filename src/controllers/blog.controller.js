const Article = require('../models/article.model')

exports.create = (req, res) => {
    res.render('blog/create')
}

exports.store = async (req, res) => {
    let article = new Article({
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: req.body.content,
    })
    try {
        await article.save()
        res.redirect('/')
    } catch (err) {
        res.render('blog/create')
    }
}