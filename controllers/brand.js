const brandservices=require('../services/brand');

exports.fetchbrand=async(req,res)=>{
    const response=await brandservices.fetch();
    //controllere servise bağladık
    res.send({
        status:true,
        data: response.brands
       // message:'Everythink is okey'
    })
};

exports.fetchcategories=async(req,res)=>{
    const response=await brandservices.fetchcategories();
    res.send({
        status:true,
        data: response.categories
    })
};

exports.singlefetchcategories=async(req,res)=>{
  try{
  const response=await brandservices.singlefetchcategories(req.params.id);
  //if(response){
    res.send({
      status:true,
      data: response.categories
    })
  }catch{
    res.send({
      status:false,
      message:'There is not found'
    })
  }
};