const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'attendance',
    'root',
    'oluwaoreoluwa28@',{
        dialect: 'mysql',
        host: 'localhost'
    }
)

module.exports = sequelize;