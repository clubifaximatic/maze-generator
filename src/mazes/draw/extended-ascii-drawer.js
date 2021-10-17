'use strict';

// depending on current cell links and next celllinks
// 
// +---+---+
// | a | b |
// +---+---+
// | c | d |
// +---+---+
//
//  0 0 0 0
//  ^ ^ ^ ^
//  | | | \-- cell `b` and `d` are linked
//  | | \---- cell `c` and `d` are linked
//  | \------ cell `a` and `c` are linked
//  \-------- cell `a` and `b` are linked
//
// Some exanples
// 11
// +---+---
// |   |  
// +---+       BR_CORNER = ┘
// |  
// +---+---
//
// 110
// +---+---
// |   |  
// +   +---    BL_CORNER = └
// |   
// +---+---
//
// 1000
// +---+---
// |     
// +---+---    U_CORNER = ┬
// |   |
// +---+---
//
// 1011
// +---+---
// |     
// +---+       H_JOIN = ─
// |   
// +---+---

const BODY = "   "
const OPEN_WALL = " "
const NOT_VISITED_BODY = " . "

const WALL = "│"
const H_WALL = "───"
const CROSS = "┼"
const H_JOIN = "─"
const L_CORNER = "├"
const U_CORNER = "┬"
const D_CORNER = "┴"
const R_CORNER = "┤"
const BL_CORNER = "└"
const BR_CORNER = "┘"
const UL_CORNER = "┌"
const UR_CORNER = "┐"

function bottomRightCornerTile(linkEast, linkSouth, southLinkEast, eastLinkSouth) {
    let n = (linkEast && 1000) + (linkSouth && 100) + (southLinkEast && 10) + (eastLinkSouth && 1)

    switch(n) {
        case 0: return CROSS
        case 1: return R_CORNER
        case 10: return D_CORNER
        case 11: return BR_CORNER
        case 100: return L_CORNER
        case 101: return WALL
        case 110: return BL_CORNER
        case 111: return WALL
        case 1000: return U_CORNER
        case 1001: return UR_CORNER
        case 1010: return H_JOIN
        case 1011: return H_JOIN
        case 1100: return UL_CORNER
        case 1101: return WALL
        case 1110: return H_JOIN
        case 1111: return "?"
    }

    return n
}

function getBottomRightCorner(cell) {
    const linkedEast = cell.isLinked(cell.east)
    const linkedSouth = cell.isLinked(cell.south)

    if (!cell.east) {
        if (!cell.south) {
            return BR_CORNER
        }
        return linkedSouth ? WALL : R_CORNER
    } else if (!cell.south) {
        return linkedEast ? H_JOIN : D_CORNER
    }

    const southOpenEast = cell.south && cell.south.isLinked(cell.south.east)
    const eastOpenSouth = cell.east && cell.east.isLinked(cell.east.south)

    return bottomRightCornerTile(linkedEast, linkedSouth, southOpenEast, eastOpenSouth)
}

function draw(grid) {
    let maze = UL_CORNER
    for (let i = 0; i < grid.columns; i++) {
        const firsColumnCell = grid.cell(i, 0)
        maze += H_WALL + bottomRightCornerTile(true, false, firsColumnCell.isLinked(firsColumnCell.east), !firsColumnCell.east)
    }
    maze += "\n"

    for (const row of grid.eachRow()) {
        let firstRowCell = row[0]

        let top = WALL
        let bottom = bottomRightCornerTile(false, true, !firstRowCell.south, firstRowCell.isLinked(firstRowCell.south))

        for (const cell of row) {
            let eastDraw = cell.isLinked(cell.east) ? OPEN_WALL : WALL
            let southDraw = cell.isLinked(cell.south) ? BODY : H_WALL
            let tile = cell.links().length > 0 ? BODY : NOT_VISITED_BODY

            top = top + tile + eastDraw
            bottom = bottom + southDraw + getBottomRightCorner(cell)
        }

        maze += top + "\n"
        maze += bottom + "\n"

    }

    return maze
}

module.exports = draw
