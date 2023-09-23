const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello, world')
})

const PORT = 3111
app.listen(PORT, () => {
    console.log(`starting dev server: http://localhost:${PORT}`)
})