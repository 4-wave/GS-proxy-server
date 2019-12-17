var express = require("express");
var app = express();
var path = require('path')
var cors = require('cors')

app.use(cors())

app.use('/', express.static(path.join(__dirname, '../public')))
app.use('/:id', express.static(path.join(__dirname, '../public')))

// Rerouting to my localhost
app.get('/airbnb/listings/:id', (req,res) => {
    const id = req.params.id
    res.redirect(`http://54.67.84.164/${id}`)
})

app.get('/airbnb/listings/', (req,res) => {
    res.redirect('http://54.67.84.164/')
})

// retroute to others, but their bundle endpoints cannot be the same as my, else the redirecg will be confuesed

app.listen(3000);