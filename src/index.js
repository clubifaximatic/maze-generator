const express = require('express')
const generate = require('./routes/generate')
const path = require('path')

const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .get('/maze/generate', generate)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
