const Sequelize = require('sequelize');
const database = require('../database');

module.exports = database.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    text: {
        type: Sequelize.STRING,
        required: true,
    },
});
