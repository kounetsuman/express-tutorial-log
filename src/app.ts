import express from 'express';
const app: express.Express = express()
import wiki from './wiki';
import logger from 'morgan';
import { area, perimeter } from './square1'; // Here we require() the name of the file without the (optional) .js file extension

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

console.log('The area of a square1 with a width of 4 is ' + area(4));