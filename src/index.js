const express = require('express')
const generate = require('./routes/generate')

const PORT = process.env.PORT || 5000

const showIndex = () => {
    return "use /maze?columns=10&rows=10"
}

express()
    .get('/', (req, res) => res.send(showIndex()))
    .get('/maze/generate', generate)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
