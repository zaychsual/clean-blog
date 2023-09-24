module.exports = (app) => {
    const blog = require('../controllers/blog.controller')
    const router = require('express').Router()

    router.get('/create', blog.create)
    router.post('/', blog.store)
    router.get('/:id', blog.show)

    app.use('/blog', router)
}