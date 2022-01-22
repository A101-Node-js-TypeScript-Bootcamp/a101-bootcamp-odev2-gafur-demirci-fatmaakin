const express=require('express');
const router = express.Router();

let brandController=require('../../controllers/brand');

router.get('/',brandController.fetchbrand);
router.get('/categories',brandController.fetchcategories);
router.get('/categories:id',brandController.singlefetchcategories);

module.exports=router;