const express=require('express');
const env=require('dotenv').config();
const app=express();
const admin_router=require('./routes/admin');

const dbms=require('./database/databse');


PORT=process.env.PORT || 5000;


app.use('/admin',admin_router);
dbms.execute("SELECT * FROM products").then((value)=>{
   console.log(value[0]);
}).catch((err)=>{
    console.log(err);
});

app.listen(PORT,()=>{

    console.log('listening at port '+PORT);
});


