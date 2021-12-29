'use strict'

module.exports = function reverse(n) {
    const reversedString = Array.from(String(Math.abs(n))).reverse().join("")
    return +reversedString;
}


