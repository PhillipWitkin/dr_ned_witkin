var express = require('express');
var app = express();
var fs = require("fs")
app.set('port', (process.env.PORT || 80));
// console.log("listening on port" + process.env.PORT || 3000)

app.use(express.static(__dirname + '/public'));


app.get("/", function(req,res){
  var html = fs.readFileSync("./views/index.html", "utf8")
  res.send(html)
})

var serverLog = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

