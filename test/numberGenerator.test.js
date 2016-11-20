var NumberGenerator = require('../src/numberGenerator.js');
var expect = chai.expect;

describe('numberGenerator', function() {
    describe('generate', function() {
        var numberGenerator;
        beforeEach(function() {
            numberGenerator = new NumberGenerator();
        });

        it('given a numberGenerator when generate for B then the result is 3 characters long starts with B and is withing 1 and 15', function() {
            for (var i = 0; i < 100; i++) {
                var result = numberGenerator.generate('B');

                expect(result).to.be.a('string');
                expect(result).to.have.lengthOf(3);
                expect(result[0]).to.equal('B');
                expect(result.substring(1)).to.be.within(1, 15);
            }
        });

        it('given a numberGenerator when generate for I then the result is 3 characters long starts with I and is withing 16 and 30', function() {
            for (var i = 0; i < 300; i++) {
                var result = numberGenerator.generate('I');

                expect(result).to.be.a('string');
                expect(result).to.have.lengthOf(3);
                expect(result[0]).to.equal('I');
                expect(result.substring(1)).to.be.within(16, 30);
            }
        });

        it('given a numberGenerator when generate for N then the result is 3 characters long starts with N and is withing 31 and 45', function() {
            for (var i = 0; i < 300; i++) {
                var result = numberGenerator.generate('N');

                expect(result).to.be.a('string');
                expect(result).to.have.lengthOf(3);
                expect(result[0]).to.equal('N');
                expect(result.substring(1)).to.be.within(31, 45);
            }
        });

        it('given a numberGenerator when generate for G then the result is 3 characters long starts with G and is withing 46 and 60', function() {
            for (var i = 0; i < 300; i++) {
                var result = numberGenerator.generate('G');

                expect(result).to.be.a('string');
                expect(result).to.have.lengthOf(3);
                expect(result[0]).to.equal('G');
                expect(result.substring(1)).to.be.within(46, 60);
            }
        });

        it('given a numberGenerator when generate for O then the result is 3 characters long starts with O and is withing 61 and 75', function() {
            for (var i = 0; i < 300; i++) {
                var result = numberGenerator.generate('O');

                expect(result).to.be.a('string');
                expect(result).to.have.lengthOf(3);
                expect(result[0]).to.equal('O');
                expect(result.substring(1)).to.be.within(61, 75);
            }
        });

        it('given a numberGenerator when generate without parameter then an error is thrown', function() {
            expect(numberGenerator.generate).to.throw(Error, 'no prefix provided');
        });

        it('given a numberGenerator when generate for a character not from BINGO then an error is thrown', function() {
            expect(function() { numberGenerator.generate('e'); }).to.throw(Error, 'invalid prefix');
        });

        it('given a numberGenerator and a list of excludes when generate then the excludes are not returned again', function() {
            var excludes = ['B01', 'B62', 'O01', 'O65', 'O70'];
            for (var i = 0; i < 300; i++) {
                var result = numberGenerator.generate('O', excludes);
                expect(result).not.to.be.oneOf(excludes);
            }
        });
    });
});