
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');

exports.register=(req,res)=>{
    let tokenArray=req.headers.authorization.split('');
    let token=tokenArray[1];
    let decodeheader=jwt_decode(token,{payload:true});
    let response={
        status:true,
        message:decodeheader
    }
        res.status(200).send(response)
}

exports.login=(req,res)=>{
    
    if(req.body.email==="fatma@gmail.com"&& req.body.password==='123'){
        const secret="79d487191150601b742fe84c22cf21f8";
        const user={
            email:'fatma@gmail.com',
            name:'fatma'
        }
    /*   res.send({
            status:false,
            message:'This user is valiable'
        })*/
        const token=jwt.sign(
            user,
            secret,
            {expiresIn:'7d'}
            );
            res.send({
                status:true,
                jwt:{
                    token:token,
                    expiresIn:'7d'
                },
                user
            })
    }
    else{
        let response={
            status:false
        }
    /* res.send({
            status:true,
            message:'Every think is okey'
    })*/
    res.status(200).send(response)
}

}
/*
exports.jwttest=(req,res)=>{
    res.send({
        status:true,
        message:'jwt calissti'
    })
}*/