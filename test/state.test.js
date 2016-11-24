var State = require('../src/js/state.js');
var expect = chai.expect;
var spy = chai.spy;




describe('state', function() {
    describe('constructor', function() {
        it('given state when the constructor is called then a state with 5 ranges is created', function() {
            var state = new State();

            expect(state).to.exist;
            expect(state.ranges).to.exist;
            expect(state.ranges.length).to.equal(5);
        });

        it('given state when the constructor is called then the alreadyGeneratedCombination length for all prefixes is 0', function() {
            var state = new State();

            expect(state.alreadyGeneratedCombinations['B'].length).to.equal(0);
            expect(state.alreadyGeneratedCombinations['I'].length).to.equal(0);
            expect(state.alreadyGeneratedCombinations['N'].length).to.equal(0);
            expect(state.alreadyGeneratedCombinations['G'].length).to.equal(0);
            expect(state.alreadyGeneratedCombinations['O'].length).to.equal(0);
        });
    }),
    describe('addGeneratedCombination', function(){
        it('given a valid combination, then the combination is added to the list of alreadyGeneratedCombinations', function(){
            var state = new State();

            state.addGeneratedCombination('B', 15);
            state.addGeneratedCombination('I', 15);
            state.addGeneratedCombination('I', 20);
            state.addGeneratedCombination('N', 32)
            expect(state.alreadyGeneratedCombinations['B'].length).to.equal(1);
            expect(state.alreadyGeneratedCombinations['I'].length).to.equal(2);
            expect(state.alreadyGeneratedCombinations['N'].length).to.equal(1);
        });
        it('given a valid combination, then the callbacks are called returning the just added prefix and value ', function(){
            var state = new State();

            var generatedCombinationAddEventHandler = function(prefix, value){};
                
            var stub = spy(generatedCombinationAddEventHandler);            
            state.addGeneratedCombinationAddedEventHandler(stub);
            state.addGeneratedCombination('B', 10);
            state.addGeneratedCombination('I', 18);
            expect(stub).to.have.been.called(2);            
        });
    });        
});