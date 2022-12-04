const Sequelize = require('sequelize')

const sequelize = require('../util/db')

const Attend = sequelize.define('attend', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    clockedIn: Sequelize.DATE,
    clockedOut: Sequelize.DATE
    //timestamps: true,
    //createdAt: 'clocked_outTimestamp',
    //clocked_out: 'clocked_outTimestamp'

});

module.exports = Attend;