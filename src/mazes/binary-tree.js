'use strict';

// const Grid = require("./model/grid")
const Random = require("java-random");

class BinaryTree {

    on(grid, seed = 0) {
        let rnd = Number(seed) ? new Random(Number(seed)) : new Random()

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

            let linkedNeighbour = neighbours[rnd.nextInt(neighbours.length)]
            cell.link(linkedNeighbour)
        }
    }
}

module.exports = BinaryTree
