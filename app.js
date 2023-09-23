const express = require('express')

const app = express()

// set directory views
app.set('views', './src/views')
app.set('view engine', 'ejs')

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