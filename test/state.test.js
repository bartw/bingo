var State = require('../src/js/state.js');
var expect = chai.expect;

describe('state', function() {
    describe('constructor', function() {
        it('given state when the constructor is called then a state with 5 ranges is created', function() {
            var state = new State();

            expect(state).to.exist;
            expect(state.ranges).to.exist;
            expect(state.ranges.length).to.equal(5);
        });
    });
});