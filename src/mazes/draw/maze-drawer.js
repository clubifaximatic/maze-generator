'use strict';

const asciiDrawer = require("./ascii-drawer")
const extendedAsciiDrawer = require("./extended-ascii-drawer")
const htmlDrawer = require("./html-drawer")

class MazeDrawer {

    toAscii(grid) {
        return asciiDrawer(grid)
    }

    toExtendedAscii(grid) {
        return extendedAsciiDrawer(grid)
    }

    toHtml(grid) {
        return htmlDrawer(grid)
    }
}

module.exports = MazeDrawer
