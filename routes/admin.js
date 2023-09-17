const express=require('express');
const adminController=require('../controllers/admin');
const router=express.Router();

router.get('/getdata',adminController.admin_controller);

module.exports= router;

