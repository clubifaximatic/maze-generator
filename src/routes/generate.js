'use strict';

const Grid = require("../mazes/model/grid")
const BinaryTree = require("../mazes/binary-tree")
const Sidewinder = require("../mazes/sidewinder")

function code400(res, message) {
    res.status(400)
    res.send(message)
}

function chooseAlgorithm(method) {
    switch(method) {
        case "binary-tree": return new BinaryTree()
        case "sidewinder": return new Sidewinder()

        default: return new BinaryTree()
    }
}

function generate(req, res) {
    console.log(req.query)

    if (req.query.columns === undefined) {
        return code400(res, "parameter `columns` is missing")
    } else if (req.query.rows === undefined) {
        return code400(res, "parameter `rows` is missing")
    }

    let method = chooseAlgorithm(req.query.method)
    let seed = req.query.seed || 0

    let grid = new Grid(req.query.columns, req.query.rows)
    method.on(grid, seed)

    res.setHeader('Content-Type', 'text/plain')
    res.send(grid.toAscii())
}

module.exports = generate