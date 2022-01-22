const express=require('express');
const jwt=require('./helpers/jwt');
const errorHAndler=require('./helpers/error-handler');
const endPoint=require('./routes/api');

const app=express();

app.use(express.json());

app.use(jwt());
app.use('/api',endPoint);
app.use(errorHAndler);

app.listen(3000,()=>{
    console.log('Serves is running');
})