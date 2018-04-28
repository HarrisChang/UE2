const express = require('express');
const router = express.Router();
const Doc = require('../models/docModel');

router.post('/doc/add', (req, res) => {
  Doc.create(req.body, (err, data) => {
    if (err) {
      res.json({
        "errorCode": 12306,
        "msg": err
      })
    } else {
      res.json({
        "errorCode": 0,
        "msg": "恭喜您，文章添加成功！"
      })
    }
  })
});

router.get('/doc', (req, res) => {
 Doc.find({}, (err, data) => {
   if(err){
     res.json({
       "errorCode": 12306,
       "msg": err
     })
   }else{
     res.json({
       "errorCode": 0,
       "data": data
     })
   }
 })
})

module.exports = router;



