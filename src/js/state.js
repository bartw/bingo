(function () {
    'use strict';

    function State() {
        var self = this;

        var Range = require('./range.js');

        self.ranges = [
            new Range('B', 1, 15),
            new Range('I', 16, 30),
            new Range('N', 31, 45),
            new Range('G', 46, 60),
            new Range('O', 61, 75)
        ];
        self.generatedNumbers = [];
    }

    module.exports = State;
})();