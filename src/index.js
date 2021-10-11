
var Grid = require("./mazes/model/grid")
var BinaryTree = require("./mazes/binary-tree")

let grid = new Grid(10,10)
let binaryTree = new BinaryTree()

// run algorithm
binaryTree.on(grid)

// print maze in ascii
console.log(grid.toAscii())
