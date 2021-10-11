'use strict';

class Cell {
    constructor(column, row) {
        this.column = column
        this.row = row
        this.north = null
        this.east = null
        this.south = null
        this.west = null
        this._links = new Map()
    }

    neighbours() {
        return Array.of(this.north, this.east, this.south, this.west)
            .filter(x => x)
    }

    link(cell) {
        if (!cell) {
            return
        }

        this._links.set(cell, true)
        cell._links.set(this, true)
    }

    unlink(cell) {
        this._links.delete(cell)
        cell._links.delete(this)
    }

    links() {
        return Array.from(this._links.keys())
    }

    isLinked(cell) {
        return this._links.has(cell)
    }

    toString() {
        return `[${this.column},${this.row}]`
    }
}

module.exports = Cell;
