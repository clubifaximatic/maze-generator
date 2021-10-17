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

function chooseAlgorithm(method) {
    switch(method) {
        case "binary-tree": return new BinaryTree()
        case "sidewinder": return new Sidewinder()
        case "aldous-broder": return new AldousBroder()
        case "wilsons": return new Wilsons()
        case "hunt-and-kill": return new HuntAndKill()
        case "backtracking": return new Backtracking()
        
        default: return new BinaryTree()
    }
}

function chooseOutput(method) {
    switch(method) {
        case "eascii": return mazeDrawer.toExtendedAscii
        case "ascii": return mazeDrawer.toAscii
        
        default: return mazeDrawer.toExtendedAscii
    }
}


function generate(req, res) {
    console.log(req.query)

    if (req.query.columns === undefined) {
        return code400(res, "parameter `columns` is missing")
    } else if (req.query.rows === undefined) {
        return code400(res, "parameter `rows` is missing")
    } else if (req.query.columns < 2 || req.query.columns > 100) {
        return code400(res, "parameter `columns` must be betweeen 1 and 100")
    } else if (req.query.rows < 2 || req.query.rows > 100) {
        return code400(res, "parameter `rows` must be betweeen 1 and 100")        
    }

    let method = chooseAlgorithm(req.query.method)
    let outputDrawer = chooseOutput(req.query.out)
    let seed = req.query.seed || 0

    let grid = new Grid(req.query.columns, req.query.rows)
    method.on(grid, seed)

    res.setHeader('Content-Type', 'text/plain')
    res.send(outputDrawer(grid))
}

module.exports = generate