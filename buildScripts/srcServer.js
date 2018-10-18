import express from 'express';
import path from 'path';
import open from 'open';

/* eslint-disable no-console */

//For WebPack configuration
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();

const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/users', function(req,res) {
  // Hard codding for simplicity. Pretend this hits a real database
  res.json([
    {"id":1, "firstName":"Tahsin", "lastName":"Ates", "email":"ttttaaaa@gmail.com"},
    {"id":2, "firstName":"Huseyin", "lastName":"Genc", "email":"hhhhgggg@gmail.com"},
    {"id":3, "firstName":"Burcu", "lastName":"Babel", "email":"bbbbeeee@gmail.com"}
  ]);
});

app.listen(port,function(err){
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
