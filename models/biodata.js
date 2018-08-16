const Sequelize = require('sequelize')
const sequelize = require('../sequelize')

const biodata = sequelize.define('biodata', {
    nama: {
        type: Sequelize.STRING(100),
    },
    jurusan: {
        type: Sequelize.STRING(50)
    },
    absen: {
        type: Sequelize.INTEGER(3)
    },
    alamat: {
        type: Sequelize.STRING(150)
    },
    jk: {
        type: Sequelize.STRING(10)
    }
})

//fungsi yang membuat model diatas dibentuk seperti kolom DB
biodata.sync()

module.exports = biodata