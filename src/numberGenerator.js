function NumberGenerator() {
    var ranges = [
        { prefix: 'B', min: 1, max: 15 },
        { prefix: 'I', min: 16, max: 30 },
        { prefix: 'N', min: 31, max: 45 },
        { prefix: 'G', min: 46, max: 60 },
        { prefix: 'O', min: 61, max: 75 }
    ];

    this.generate = function generate(prefix, excludes) {
        excludes = excludes || [];
        if (!prefix) {
            throw Error('no prefix provided');
        }
        var range = getRange(prefix);
        if (!range) {
            throw Error('invalid prefix');
        }
        var generated;
        do {
            generated = generateFromRange(range);
        } while (inExcludes(excludes, generated));
        return generated;
    };

    function getRange(prefix) {
        for (var i = 0; i < ranges.length; i++) {
            if (ranges[i].prefix === prefix) {
                return ranges[i];
            }
        }
        return null;
    }

    function randomIntFromInterval(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateFromRange(range) {
        var number = randomIntFromInterval(range.min, range.max);
        var zeroFilled = ('00' + number).slice(-2);
        return range.prefix + zeroFilled;
    }

    function inExcludes(excludes, generated) {
        for (var i = 0; i < excludes.length; i++) {
            if (excludes[i] === generated) {
                return true;
            }
        }
        return false;
    }
}

module.exports = NumberGenerator;