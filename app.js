const express = require('express')
const app = express()
const mongoose = require('mongoose')

//set connection db
mongoose.connect('mongodb://localhost:27017/clean_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})

// set directory views
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended: false
}))

//set static public
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//set file routes
require('./src/routes/home.routes')(app)
require('./src/routes/blog.routes')(app)

//set port
const PORT = 3111
app.listen(PORT, () => {
    console.log(`starting dev server: http://localhost:${PORT}`)
})