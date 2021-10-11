'use strict';

var Cell = require("./cell")

class Grid {

    constructor (columns, rows) {
        this.columns = columns
        this.rows = rows
        this.grid = []

        this.prepareGrid()
        this.configureCells()
    }
    
    prepareGrid() {
        // Create grid using [row][column] to provide rows easier
        for (let y = 0; y < this.rows; y++) {
            this.grid[y] = []
            for (let x = 0; x < this.rows; x++) {
                this.grid[y][x] = new Cell(x, y)
            }
        }
    }

    configureCells() {
        for (let cell of this.cells()) {
            let x = cell.column
            let y = cell.row
            cell.north = this.cell(x, y - 1)
            cell.east = this.cell(x + 1, y)
            cell.south = this.cell(x, y + 1)
            cell.weast = this.cell(x - 1, y)
        }
    }

    size() {
        return this.rows * this.columns
    }

    eachRow() {
        let allRows = []
        for (let allRow of this.grid.values()) {
            allRows.push(allRow)
        }

        return allRows
    }

    cells() {
        let allCells = []
        for (let allRow of this.grid.values()) {
            for (let cell of allRow.values()) {
                allCells.push(cell)
            }
        }

        return allCells
    }

    cell(column, row) {
        if (column < 0 || row < 0 || column >= this.columns || row >= this.rows) {
            return null
        }

        return this.grid[row][column]
    }

    toAscii() {

        let maze = "+"
        for (let i = 0; i < this.columns; i++) {
            maze += "---+"
        }
        maze += "\n"

        for (let row of this.eachRow()) {

            let top = "|"
            let bottom = "+"

            for (let cell of row) {

                let body = "   "
                let eastDraw = cell.isLinked(cell.east) ? " " : "|"
                let southDraw = cell.isLinked(cell.south) ? "   " : "---"
                
                top = top + body + eastDraw
                bottom = bottom + southDraw + "+"
            }

            maze += top + "\n"
            maze += bottom + "\n"
        }

        return maze
    }
}

module.exports = Grid;
