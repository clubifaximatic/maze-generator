'use strict';

const Algorithm = require("./algortithm")

class Sidewinder {

    on(grid, seed = 0) {
        for (let row of grid.eachRow()) {
            let run = []

            for (let cell of row) {
                run.push(cell)

                let lastCell = cell.east == null
                let moveNorth = lastCell || (cell.north != null && super.nextInt(2) == 0)

                if (moveNorth) {
                    let linkedNeighbour = super.sample(run)
                    if (linkedNeighbour.north) {
                        linkedNeighbour.link(linkedNeighbour.north)
                    }
                    run.length = 0
                } else {
                    cell.link(cell.east)
                }
            }
        }
    }
}

module.exports = Sidewinder
