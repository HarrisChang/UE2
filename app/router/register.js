const express = require('express');
const router = express.Router();
const Register = require('../models/registerModel');
router.post('/register', (req, res) => {
  Register.find({name: req.body.name}, (err, data) => {
    if(err){
      res.json({
        "errorCode": 12306,
        "msg": err
      })
    }else{
      if(data.length > 1){
        res.json({
          "errorCode": 12306,
          "msg": "用户名已存在！"
        })
      }else{
        Register.create(req.body, (err, data) => {
          if (err) {
            res.json({
              "errorCode": 12306,
              "msg": "注册失败！"
            })
          } else {
            res.json({
              "errorCode": 0,
              "msg": "恭喜您，注册成功！"
            })
          }
        })
      }
    }
  })
})

module.exports = router;
