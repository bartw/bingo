(function () {
    'use strict';

    function Range(prefix, from, to) {
        var self = this;

        if (!prefix) {
            throw new Error('invalid prefix');
        }

        if (isNaN(from) || from < 0) {
            throw new Error('invalid from');
        }

        if (isNaN(to) || to < 0) {
            throw new Error('invalid to');
        }

        if (from > to) {
            throw new Error('from greater than to');
        }

        Object.defineProperty(self, 'prefix', {
            value: prefix,
            writable: false
        });
        Object.defineProperty(self, 'from', {
            value: from,
            writable: false
        });
        Object.defineProperty(self, 'to', {
            value: to,
            writable: false
        });
        
        var remainingNumbers = generateNumbers(self.from, self.to);
        var generatedNumbers = [];

        var RandomNumberGenerator = require('./randomNumberGenerator.js');
        var randomNumberGenerator = new RandomNumberGenerator();

        self.nextNumber = function nextNumber() {
            if (remainingNumbers.length === 0) {
                throw new Error('all numbers are generated');
            }
            var index;
            if (remainingNumbers.length === 1) {
                index = 0;
                
            } else {
                index = randomNumberGenerator.generate(0, remainingNumbers.length-1);
            }
            var nextNumber = remainingNumbers.splice(index, 1)[0];
            generatedNumbers.push(nextNumber);
            return self.prefix + nextNumber;
        };

        function generateNumbers(from, to) {
            var numbers = [];
            for (var i = from; i <= to; i++) {
                numbers.push(i);
            }
            return numbers;
        }
    }

    module.exports = Range;
})();