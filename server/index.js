var express = require("express");
var app = express();
var path = require('path')
var cors = require('cors')

app.use(cors())

app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/app1',function(req,res) {
    res.send("Hello world From Server 1");
});


app.listen(3001);