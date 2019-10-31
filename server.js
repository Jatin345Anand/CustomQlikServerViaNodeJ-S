const express = require('express');
var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});
const bodyParser = require('body-parser');
const ejs = require('ejs');
// const ejslint = require('ejs-lint');
// const event = require('events');
const cors = require('./utils/middlewares/cors');
const routesQlik = require('./routes/qlikRoute');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json());
app.use(cors);
app.set('view engine','ejs');
// ejslint.lint();
// app.use('/',function(req,res){
// console.log('Hii',req,res);
// res.send('HI');
// });
app.use('/',routesQlik);
// routesQlik.initialize(app);
app.listen(process.env.PORT || 1234,function(){
console.log('Get Ready to your Own Qlik!!');
});