var mongoose = require('mongoose');
var express = require('express');
var app = express();
var router = express.Router();
var cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var visitorSchema = mongoose.Schema({
    message: String,
    nickname: String,
    ip: String,
    time: String
})
visitorSchema.methods.okay=function(){
    console.log("It's okay.");
}
var visitorModel = mongoose.model('Visitor', visitorSchema);
app.use(cors());
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.post('/test',function(req, res){
    mongoose.connect('mongodb://localhost/raku',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }, function(err){
          if(err)
            console.log("连接失败")
          else{
              console.log("连接成功")
              var visitor = new visitorModel({
                message: req.body.message,
                nickname: req.body.nickname,
                ip: req.ip,
                time: new Date().toLocaleString()
            });
          visitor.save((err, visitor)=>{
            if(err) return console.log(err);
            visitor.okay();
          });
        }
      });
});
app.post('/getmessages',function(req, res){
    mongoose.connect('mongodb://localhost/raku',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }, function(err){
        if(err)
          console.log("nnnn")
        else{
          console.log("1111")
          visitorModel.find({}, function(err, visitors){
            console.log(visitors);
            res.send(visitors);
          })
        }
      });
});

app.listen(3000);