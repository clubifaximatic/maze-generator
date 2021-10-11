'use strict';

const Algorithm = require("./algortithm")

class AldousBroder extends Algorithm {

    on(grid) {
        let cell = super.sample(grid.cells())

        let unvisited = grid.size()
        while (unvisited > 1) {
            let nextCell = super.sample(cell.neighbours())

            // not visited
            if (nextCell.links().length == 0) {
                cell.link(nextCell)
                unvisited--
            }

            cell = nextCell;
        }
    }
}

module.exports = AldousBroder
