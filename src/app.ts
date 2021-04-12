import express from 'express';
import wiki from './wiki';
import logger from 'morgan';
import { area } from './square1';

const app: express.Express = express()

console.log(`[APP] router handlers 例 start`);

app.use('/wiki', wiki);
app.use(logger('dev'));

app.get('/', (req, res) => {
    console.log(`[APP] '/' listening`);
    res.send('Hello World!');
});

console.log(`[APP] router handlers 例 end`);
console.log(`[APP] (nodejs)module import start`);

console.log(`The area of a square1 with a width of 4 is ${area(4)}`);

console.log(`[APP] (nodejs)module import end`);
console.log(`[APP] middleware functionの例 setting start`);

const a_middleware_function = (req, res, next) => {
    console.log(`[APP] 'a_middleware_function' middleware setting`);
    next();
};

console.log(`[APP] Function added with use() for all routes and verbs`);
app.use(a_middleware_function);

console.log(`[APP] Function added with use() for a specific route`);
app.use('/someroute', a_middleware_function);

console.log(`[APP] A middleware function added for a specific HTTP verb and route`);
app.get('/', a_middleware_function);

console.log(`[APP] middleware functionの例 setting end`);
console.log(`[APP] all routingの例 setting start`);

app.all('/secret', (req, res, next) => {
    console.log(`[APP] Accessing the secret section ...`);
    next();
    console.log(`[APP] pass control to the next handler`);
});

console.log(`[APP] all routingの例 setting end`);
console.log(`[APP] server listening start`);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

console.log(`[APP] server listening end`);
