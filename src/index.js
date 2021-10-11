const express = require('express')

var Grid = require("./mazes/model/grid")
var BinaryTree = require("./mazes/binary-tree")

showIndex = () => {
    return "use /maze?columns=10&rows=10"
}

generateMaze = (req, res) => {
    console.log(req.query)
    let columns = req.query.columns
    let rows = req.query.rows
    if (columns === undefined) {
        return res.send("parameter `columns` is missing")
    } else if (rows === undefined) {
        return res.send("parameter `rows` is missing")
    }

    let grid = new Grid(columns, rows)

    let binaryTree = new BinaryTree()
    binaryTree.on(grid)
    
    res.setHeader('Content-Type', 'text/plain')
    res.send(grid.toAscii())
}

express()
    .get('/', (req, res) => res.send(showIndex()))
    .get('/maze', (req, res) => generateMaze(req, res))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))


