const expressJwt=require('express-jwt');
const secret="79d487191150601b742fe84c22cf21f8";

module.exports=jwt;
function jwt(){
    return expressJwt({secret,algorithms:['HS256']}).unless({
        path:[
            '/api/user/login'
        ]
    });
}
module.exports=jwt;