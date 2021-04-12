const express = require('express');
const app = express();

// middleware functionの例
const a_middleware_function = function (req, res, next) {
    // ... ここで何かしらの処理
    console.log('a_middleware_functionが呼ばれた');
    next();
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);

app.listen(8000);