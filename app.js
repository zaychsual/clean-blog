const express = require('express')

const app = express()

// set directory views
app.set('views', './src/views')
app.set('view engine', 'ejs')

//set file routes
require('./src/routes/home.routes')(app)

//set port
const PORT = 3111
app.listen(PORT, () => {
    console.log(`starting dev server: http://localhost:${PORT}`)
})