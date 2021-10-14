'use strict';

const Algorithm = require("./algortithm")

class HuntAndKill extends Algorithm {

    on(grid) {
        let cell = super.sample(grid.cells())

        while (cell != null) {
            let unvisitedNeighbours = cell.neighbours()
                .filter(e => e.links().length == 0)

            if (unvisitedNeighbours.length == 0) {                
                cell = null
                for (let nextCell of grid.cells()) {
                    if (nextCell.links().length > 0) {
                        continue
                    }

                    let visitedNeighbours = nextCell.neighbours()
                        .filter(e => e.links().length > 0)
                    if (visitedNeighbours.length == 0) {
                        continue
                    }
                    let neighbour = super.sample(visitedNeighbours)
                    nextCell.link(neighbour)
                    cell = nextCell
                    break;
                }
            } else {
                let nextCell = super.sample(unvisitedNeighbours)
                cell.link(nextCell)
                cell = nextCell
            }
        }
    }
}

module.exports = HuntAndKill
