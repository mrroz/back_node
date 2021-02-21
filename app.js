const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const adminRoutes = require('./routes/admin'),
    shopData = require('./routes/shop');

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/admin', adminRoutes)
app.use(shopData)


//app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))



app.use((req, res) => {
    res.sendFile(path.join(__dirname, './views/not.html'))
})





app.listen(3000)


//morteza roozbehi