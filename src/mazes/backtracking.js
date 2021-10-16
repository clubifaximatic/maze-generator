'use strict';

const Algorithm = require("./algortithm")

class Backtracking extends Algorithm {

    on(grid) {
        let cell = super.sample(grid.cells())
        let stack = []

        while (cell != null) {
            let unvisitedNeighbours = cell.neighbours()
                .filter(e => e.links().length == 0)

            if (unvisitedNeighbours.length == 0) {
                cell = stack.pop()
            }
            else {
                stack.push(cell)

                let nextCell = super.sample(unvisitedNeighbours)
                cell.link(nextCell)
                cell = nextCell
            }
        }
    }
}

module.exports = Backtracking
