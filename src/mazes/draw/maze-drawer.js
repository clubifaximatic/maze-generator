'use strict';

const asciiDrawer = require("./ascii-drawer")
const extendedAsciiDrawer = require("./extended-ascii-drawer")

class MazeDrawer {

    toAscii(grid) {
        return asciiDrawer(grid)
    }

    toExtendedAscii(grid) {
        return extendedAsciiDrawer(grid)
    }
}

module.exports = MazeDrawer
