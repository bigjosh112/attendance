const Sequelize = require('sequelize')

const sequelize = require('../util/db')

const User =  sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: Sequelize.STRING,
    specialization: Sequelize.STRING,
    worker_id: Sequelize.STRING 
    
});




module.exports = User;