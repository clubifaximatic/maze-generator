'use strict';

const Grid = require("../mazes/model/grid")
const BinaryTree = require("../mazes/binary-tree")
const Sidewinder = require("../mazes/sidewinder");
const AldousBroder = require("../mazes/aldous-broder");
const Wilsons = require("../mazes/wilsons");
const HuntAndKill = require("../mazes/hunt-and-kill")
const Backtracking = require("../mazes/backtracking")

const MazeDrawer = require("../mazes/draw/maze-drawer")

const mazeDrawer = new MazeDrawer()

function code400(res, message) {
    res.status(400)
    res.send(message)
}

function chooseAlgorithm(method, seed = 0) {
    switch(method) {
        case "binary-tree": return new BinaryTree(seed)
        case "sidewinder": return new Sidewinder(seed)
        case "aldous-broder": return new AldousBroder(seed)
        case "wilsons": return new Wilsons(seed)
        case "hunt-and-kill": return new HuntAndKill(seed)
        case "backtracking": return new Backtracking(seed)
        
        default: return new Backtracking(seed)
    }
}

function chooseOutput(output) {
    switch(output) {
        case "eascii": return mazeDrawer.toExtendedAscii
        case "ascii": return mazeDrawer.toAscii
        case "html": return mazeDrawer.toHtml
        
        default: return mazeDrawer.toHtml
    }
}

function generate(req, res) {
    console.log(req.query)

    if (req.query.columns === undefined) {
        return code400(res, "parameter `columns` is missing")
    } else if (req.query.rows === undefined) {
        return code400(res, "parameter `rows` is missing")
    } else if (!Number.parseInt(req.query.columns) || req.query.columns < 1 || req.query.columns > 100) {
        return code400(res, "parameter `columns` must be betweeen 1 and 100")
    } else if (!Number.parseInt(req.query.rows) || req.query.rows < 1 || req.query.rows > 100) {
        return code400(res, "parameter `rows` must be betweeen 1 and 100")        
    }

    let seed = req.query.seed || 0
    let method = chooseAlgorithm(req.query.method, seed)
    let outputDrawer = chooseOutput(req.query.out)

    let grid = new Grid(req.query.columns, req.query.rows)
    method.on(grid, seed)

    if (req.query.out != 'html') {
        res.setHeader('Content-Type', 'text/plain')
    }
    res.send(outputDrawer(grid))
}

module.exports = generate