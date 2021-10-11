'use strict';

const { randomInt } = require("crypto")
var Grid = require("./model/grid")

class BinaryTree {

    on(grid) {
        for (let cell of grid.cells()) {
            let neighbours = []
            if (cell.north != null) {
                neighbours.push(cell.north)
            }
            if (cell.east != null) {
                neighbours.push(cell.east)
            }

            if (neighbours.length == 0) {
                continue
            }

            let linkedNeighbour = neighbours[randomInt(neighbours.length)]
            cell.link(linkedNeighbour)
        }
    }
}

module.exports = BinaryTree