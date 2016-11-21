# Bingo

## Quickstart

Open a shell and type following commands.

```shell
git clone https://github.com/bartw/bingo.git
cd bingo
npm install
```

To run in electron

```shell
npm run electron
```

To run as a website

```shell
npm run build:watch
```

Open a browser and surf to http://localhost:7418/webpack-dev-server/.

## Get going

Open powershell and type following commands.
This will create a folder for our project. 
Initialize a git repository and create a gitignore file.
Initialize an npm project.
Create a markdown readme file (the one you are reading right now).
Install the packages we need from npm.
Create a config file for testing.
Create a folder for our tests and a one test file.
Create a folder for our sources and add one javascript file.

```shell
mkdir bingo
cd bingo
git init
New-Item .gitignore
npm init
New-Item README.md
npm install webpack mocha chai karma karma-webpack karma-mocha karma-chai karma-phantomjs-launcher --save-dev
New-Item karma.config.js
mkdir test
New-Item .\test\numberGenerator.test.js
mkdir src
New-Item .\src\numberGenerator.js
```

In .gitignore we specify the files to ignore for checking in.

```
node_modules
npm-debug.log
```

In package.json we add a script to run our tests.

```json
"test": "karma start karma.config.js"
```

In karma.config.js we configure our test runner karma.

```js
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        files: ['./test/*.test.js'],
        preprocessors: { './test/*.test.js': ['webpack'] },
        webpack: {},
        webpackMiddleware: { noInfo: true },
        plugins: [
            require('karma-webpack'),
            require('karma-mocha'),
            require('karma-chai'),  
            require('karma-phantomjs-launcher')
        ],
        autoWatch: false,
        singleRun: true,
        concurrency: Infinity
    })
};
```

In numberGenerator.test.js we write a simple test.

```js
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
```

And in numberGenerator.js we create an implementation for our test.

```js
var numberGenerator = {
    generate: function generate() {
        return 1;
    }
};

module.exports = numberGenerator;
```

Now we can run our tests using the following command.
We can see that all tests are green.
If we change our test to expect 2 or if we change the return value of the generate function to 3 and run the tests again, we see that the tests turn red.

```shell
npm test
```

## Watching tests

Create a config script for watching tests.

```shell
New-Item karma.watch.config.js
```

In karma.watch.config.js we use our normal config and override some values.

```js
var baseConfig = require('./karma.config.js');

module.exports = function(config) {
    baseConfig(config);
    config.set({
        singleRun: false,
        autoWatch: true,
        autoWatchBatchDelay: 300
    });
};
```

In package.json we add a script to run our tests.

```json
"watch": "karma start karma.watch.config.js"
```

Now we can watch our tests.

```shell
npm run watch
```

## Linting

Execute these commands.

```shell
npm install eslint --save-dev
./node_modules/.bin/eslint --init
```

In package.json we add a script to lint.

```json
"lint": "eslint . --ext .js --ignore-path .gitignore --cache"
```

Now we can lint using the follwing command.

```shell
npm run lint
```

## Web app

npm install less less-loader css-loader style-loader extract-text-webpack-plugin file-loader webpack-dev-server --save-dev

"build": "webpack",
"build:watch": "webpack-dev-server --progress -d --colors"

webpack.config.js