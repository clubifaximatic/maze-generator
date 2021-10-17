'use strict';

const Cell = require("./cell")

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
            for (let x = 0; x < this.columns; x++) {
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
            cell.west = this.cell(x - 1, y)
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

    toString() {
        return `[Grid ${this.columns}x${this.rows}]`
    }
}

module.exports = Grid;
