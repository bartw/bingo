(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var Game = require('./game.js');
        var game = new Game();

        var generatedNumbers = document.getElementById('generated-numbers');
        var generatedNumber = document.getElementById('generated-number');
        var nextNumber = document.getElementById('next-number');
        var newGame = document.getElementById('new-game');
        var allNumbersAreGenerated = 'all numbers are generated';

        nextNumber.addEventListener('click', function() {
            if (generatedNumber.textContent && generatedNumber.textContent !== allNumbersAreGenerated) {
                var nextNumberListItem = document.createElement('li');
                nextNumberListItem.textContent = generatedNumber.textContent;
                generatedNumbers.appendChild(nextNumberListItem);
            }

            if (game.areNumbersAvailable()) {
                var nextNumber = game.nextNumber();
                generatedNumber.textContent = nextNumber.prefix + nextNumber.value;
            } else {
                generatedNumber.textContent = allNumbersAreGenerated;
            }
        });

        newGame.addEventListener('click', function() {
            game = new Game();
            generatedNumber.textContent = '';
            while (generatedNumbers.firstChild) {
                generatedNumbers.removeChild(generatedNumbers.firstChild);
            }
        });
    });
})();