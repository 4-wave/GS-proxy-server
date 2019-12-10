var express = require("express");
var app = express();
var path = require('path')
var cors = require('cors')

app.use(cors())

app.use('/', express.static(path.join(__dirname, '../public')))
app.use('/:id', express.static(path.join(__dirname, '../public')))

app.listen(3000);