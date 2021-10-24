'use strict';

function header(columns, rows) {
    return `<head><link rel="stylesheet" href="/maze.css"></head>`
}

function wrapContainer(value) {
    return `<div class="grid-container">${value}</div>`
}

function wrapBody(value) {
    return `<body>${value}</body>`
}

function wrapHtml(columns, body) {
    const h = header(columns)
    return `<html>${h}${wrapBody(body)}</html>`
}

function createItem(north, east, south, west) {
    return `<div class="grid-item"><img src="/${north}${east}${south}${west}.png"></div>`
}

function wrapTable(value) {
    return `<table>${value}</table>`
}

function wrapRow(value) {
    return `<tr>${value}</tr>`
}

function wrapCell(cell) {
    var north = cell.isLinked(cell.north) ? 1 : 0
    var east = cell.isLinked(cell.east) ? 1 : 0
    var south = cell.isLinked(cell.south) ? 1 : 0
    var west = cell.isLinked(cell.west) ? 1 : 0
    return `<td><img src="/tiles/${north}${east}${south}${west}.png"></td>`
}


function draw(grid) {
    var maze = ""
    for (let row of grid.eachRow()) {
        var mazeRow = ""
        for (let cell of row) {
            mazeRow += wrapCell(cell)
        }
        maze += wrapRow(mazeRow)
    }

    return wrapHtml(grid.columns, wrapBody(wrapTable(maze)))
}

module.exports = draw
