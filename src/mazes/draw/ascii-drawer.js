
'use strict';

const BODY = "   "
const OPEN_WALL = " "
const NOT_VISITED_BODY = " . "

const WALL = "|"
const H_WALL = '---'
const CROSS = "+"

function draw(grid) {
    let maze = CROSS
    for (let i = 0; i < grid.columns; i++) {
        maze += H_WALL + CROSS
    }
    maze += "\n"

    for (let row of grid.eachRow()) {

        let top = WALL
        let bottom = CROSS

        for (let cell of row) {
            let eastDraw = cell.isLinked(cell.east) ? OPEN_WALL : WALL
            let southDraw = cell.isLinked(cell.south) ? BODY : H_WALL

            let tile = cell.links().length > 0 ? BODY : NOT_VISITED_BODY
            
            top = top + tile + eastDraw
            bottom = bottom + southDraw + CROSS
        }

        maze += top + "\n"
        maze += bottom + "\n"
    }

    return maze
}

module.exports = draw
