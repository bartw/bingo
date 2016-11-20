function NumberGenerator() {
    var ranges = [
        { prefix: 'B', min: 1, max: 15 },
        { prefix: 'I', min: 16, max: 30 },
        { prefix: 'N', min: 31, max: 45 },
        { prefix: 'G', min: 46, max: 60 },
        { prefix: 'O', min: 61, max: 75 },];

    this.generate = function generate(prefix) {
        if (!prefix) {
            throw Error('no prefix provided');
        }
        var range = getRange(prefix);
        if (!range) {
            throw Error('invalid prefix');
        }
        var number = randomIntFromInterval(range.min, range.max);
        var zeroFilled = ('00' + number).slice(-2);
        return range.prefix + zeroFilled;
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
}
/*
var prefixes = ['B', 'I', 'N', 'G', 'O'];

var numberGenerator = {
    generate: function generate(prefix) {
        var randomPrefixIndex = randomIntFromInterval(0, prefixes.length - 1);
        var prefix = prefixes[randomPrefixIndex];
        var number = randomIntFromInterval(1, 75);
        var zeroFilled = ('00' + number).slice(-2);
        return prefix + zeroFilled;

        function randomIntFromInterval(min, max)
        {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }    
};*/

module.exports = NumberGenerator;