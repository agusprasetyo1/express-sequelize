const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const biodataRouter = require('./routers/biodata')
const methodOverride = require('method-override')

//Set template Engine
app.set('view engine', 'ejs')

//Parsing post data
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//Untuk menginisialisasi Method ex : Method = 'PUT' dan 'DELETE
app.use(methodOverride('_method'))

//Static folder public
app.use(express.static(__dirname + '/public'))

//Routing
app.use('/biodata', biodataRouter)

//Server
app.listen(3000, 'localhost', () => {
    console.log('Server listened in port : ' + 3000)
})