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

    link(cell) {
        this._links.set(cell, true)
        cell._links.set(this, true)
    }

    unlink(cell) {
        this._links.delete(cell)
        cell._links.delete(this)
    }

    links() {
        return this._links.keys()
    }

    isLinked(cell) {
        return this._links.has(cell)
    }

    toString() {
        return `[${this.column},${this.row}]`
    }
}

module.exports = Cell;
