'use strict';

const Algorithm = require("./algortithm")

class BinaryTree extends Algorithm {

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

            let linkedNeighbour = super.sample(neighbours)
            cell.link(linkedNeighbour)
        }
    }
}

module.exports = BinaryTree
