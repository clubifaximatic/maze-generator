'use strict';

const Algorithm = require("./algortithm")

function deleteElement(array, element) {
    let index = array.indexOf(element)
    if (index >= 0) {
        array.splice(index, 1);
    }
}

class Wilsons extends Algorithm {

    on(grid) {
        let unvisited = grid.cells()
        let firstCell = super.sample(unvisited)
        deleteElement(unvisited, firstCell)

        while (unvisited.length > 0) {
            let cell = super.sample(unvisited)
            let path = [cell    ]

            while (unvisited.includes(cell)) {
                cell = super.sample(cell.neighbours())

                let index = path.indexOf(cell)
                if (index >= 0) {
                    path.splice(index + 1)

                    let v = ""
                    path.forEach(e => v += e.toString() + ",")
                } else {
                    path.push(cell)
                }
            }

            // link all path
            for (let i = 0; i < path.length - 1; i++) {
                let pathCell = path[i]
                pathCell.link(path[i + 1])
                deleteElement(unvisited, pathCell)
            }
        }
    }
}

module.exports = Wilsons
