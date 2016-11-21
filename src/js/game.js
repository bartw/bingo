(function () {
    'use strict';

    function Game() {
        var self = this;

        var RandomNumberGenerator = require('./randomNumberGenerator.js');
        var randomNumberGenerator = new RandomNumberGenerator();
        var State = require('./state.js');
        var state = new State();

        self.nextNumber = function() {
            var availableRanges = getAvailableRanges(state.ranges);
            if (availableRanges.length === 0) {
                throw new Error('all numbers are generated');
            } 
            var index = getRandomIndex(randomNumberGenerator, availableRanges);
            var nextNumber = availableRanges[index].nextNumber();
            state.generatedNumbers.push(nextNumber);
            return nextNumber;
        };

        self.areNumbersAvailable = function areNumbersAvailable() {
            for (var i = 0; i < state.ranges.length; i++) {
                if (state.ranges[i].areNumbersAvailable()) {
                    return true;
                }
            }
            return false;
        };

        function getAvailableRanges(ranges) {
            return ranges.filter(function(range) {
                return range.areNumbersAvailable();
            });
        }

        function getRandomIndex(randomNumberGenerator, list) {
            if (list.length === 1) {
                return 0;
            } else {
                return randomNumberGenerator.generate(0, list.length-1);
            }
        }
    }

    module.exports = Game;
})();