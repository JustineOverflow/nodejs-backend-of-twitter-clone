const Sequelize = require('sequelize');

module.exports = new Sequelize('posts', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});
