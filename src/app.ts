import express from 'express';
const app: express.Express = express()
import wiki from './wiki.js';
import logger from 'morgan';

app.use('/wiki', wiki);
app.use(logger('dev'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});

app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next();  // pass control to the next handler
});

var square1 = require('./square1'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square1 with a width of 4 is ' + square1.area(4));

var square2 = require('./square2'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square2 with a width of 4 is ' + square2.area(4));