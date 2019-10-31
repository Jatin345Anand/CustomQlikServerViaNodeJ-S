const express  = require('express');
const router = express.Router();
const QlikDevHubOperations = require('../models/devhubOperation');
const QlikHubOpeartions = require('../models/huboperation');
router.post('/qlikserver',(request,response)=>{
console.log(request.body);
if(request.body.qh){
QlikHubOpeartions.StartQlikEngine(request,response);
}
if(request.body.qdh){
QlikDevHubOperations.UploadQlikFilesStartEngine(request,response);
}
});
router.post('/qlikdevhub',(req,res)=>{
console.log(req.body);
});
router.post('/qlikhub',(req,res)=>{
    
    console.log(req.body);
})
// ROUTER.use();
module.exports = router;