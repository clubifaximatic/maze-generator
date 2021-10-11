'use strict';

const Random = require("java-random");

class Algorithm {

    constructor(seed = 0) {
        this.rnd = Number(seed) ? new Random(Number(seed)) : new Random()        
    }

    nextInt(length) {
        return this.rnd.nextInt(length)
    }

    sample(elements) {
        if (!Array.isArray(elements) || elements.length == 0) {
            return null
        }

        let i = this.nextInt(elements.length)
        return elements[i]
    }
}

module.exports = Algorithm
