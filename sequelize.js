const Sequelize = require('sequelize')

// DB: 'db_sequelize' 
// USERNAME: 'root' 
// PASSWORD: ''
const sequelize = new Sequelize('db_sequelize', 'root', '', {
    dialect: 'mysql'
})

module.exports = sequelize