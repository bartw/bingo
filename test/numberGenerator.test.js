var numberGenerator = require('../src/numberGenerator.js');
var expect = chai.expect;

describe('numberGenerator', function () {
    describe('generate', function () {
        it('given a numberGenerator when generate then 1 is returned', function () {
            var result = numberGenerator.generate();

            expect(result).to.equal(1);
        });
    });
});