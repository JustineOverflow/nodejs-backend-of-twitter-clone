const database = require('./database');


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const tweets = require('./tweets/routes');

app.use(bodyParser.json());

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(tweets);

(async () => {
    await database.sync();
    app.listen(8080);
})();
