'use strict';

const Random = require("java-random");

class Sidewinder {

    on(grid, seed = 0) {
        let rnd = Number(seed) ? new Random(Number(seed)) : new Random()

        for (let row of grid.eachRow()) {
            let run = []

            for (let cell of row) {
                run.push(cell)

                let lastCell = cell.east == null
                let moveNorth = lastCell || (cell.north != null && rnd.nextInt(2) == 0)

                if (moveNorth) {
                    let linkedNeighbour = run[rnd.nextInt(run.length)]
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
