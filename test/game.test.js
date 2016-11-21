var Game = require('../src/js/game.js');
var expect = chai.expect;

describe('game', function() {
    var max = 75;

    describe('nextNumber', function() {
        var allRangePrefixes = ['B', 'I', 'N', 'G', 'O'];
        var min = 1;
        var game;
        
        beforeEach(function() {
            game = new Game();
        });

        it('given a game when calling nextNumber then a number from a range should be returned', function() {
            var number = game.nextNumber();

            expect(number[0]).to.be.oneOf(allRangePrefixes);
            expect(parseInt(number.substring(1))).to.be.within(min, max);
        });

        it('given a game of length n when calling nextNumber n times then each number from the game with prefix should be returned', function() {
            var numbers = [];
            for(var i = 0; i < max; i++) {
                numbers.push(game.nextNumber());
            }

            expect(numbers.length).to.equal(max);
            numbers.forEach(function(number) {
                expect(number[0]).to.be.oneOf(allRangePrefixes);
                expect(parseInt(number.substring(1))).to.be.within(min, max);
            });
        });

        it('given a game of length n when calling nextNumber n + 1 times then an error is thrown', function() {
            for(var i = 0; i < max; i++) {
                game.nextNumber();
            }

            expect(game.nextNumber).to.throw(Error, 'all numbers are generated');
        });
    });

    describe('areNumbersAvailable', function() {
        var game;
        
        beforeEach(function() {
            game = new Game();
        });

        it('given a game when no numbers are generated then areNumbersAvailable returns true', function() {
            expect(game.areNumbersAvailable()).to.equal(true);
        });

        it('given a game when some but not all numbers are generated then areNumbersAvailable returns true', function() {
            for(var i = 0; i < max - 1; i++) {
                game.nextNumber();
            }
            expect(game.areNumbersAvailable()).to.equal(true);
        });

        it('given a game when all numbers are generated then areNumbersAvailable returns false', function() {
            for(var i = 0; i < max; i++) {
                game.nextNumber();
            }
            expect(game.areNumbersAvailable()).to.equal(false);
        });
    });
});