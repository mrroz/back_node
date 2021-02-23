const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongodbConnect = require('./util/database').mongodbConnect
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




mongodbConnect(() => {
    app.listen(3000, console.log('yees'))
})



//morteza roozbehi