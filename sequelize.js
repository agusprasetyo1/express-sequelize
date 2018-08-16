const Sequelize = require('sequelize')

const sequelize = new Sequelize('db_sequelize', 'root', '', {
    dialect: 'mysql'
})

module.exports = sequelize