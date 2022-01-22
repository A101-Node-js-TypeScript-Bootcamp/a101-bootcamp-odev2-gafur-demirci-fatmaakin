const express=require('express');
const router = express.Router();

const userendPoint=require('./user/user');

//localhost:3000/api/user
router.use('/user',userendPoint);

module.exports = router;