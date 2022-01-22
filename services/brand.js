const axios=require('axios');

exports.fetchbrand= async()=>{
   const response=await axios.get('https://api.trendyol.com/sapigw/brands');
   console.log(response);
   return response;
};

exports.fetchcategories=async()=>{
   const response=await axios.get('https://api.trendyol.com/sapigw/product-categories');
   console.log(response);
   return response;
};

exports.singlefetchcategories=async()=>{
   const response=await axios.get('https://api.trendyol.com/sapigw/product-categories');
   console.log(response);
   return response;
};