const express = require(`express`);
const recipeRouter = require('./recipiesRoute/recipes-Router');
const server = express();

server.use(express.json());
server.use('./recipe', recipeRouter);
module.exports = server;