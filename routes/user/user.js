const express=require('express');
const router = express.Router();
let userconntroller=require('../../controllers/user');

router.route('/login').post(userconntroller.login);
router.route('/register').post(userconntroller.register);

module.exports=router;