const db=require('mysql2');

const connect= db.createPool({host:'localhost',
user:'root',
password:process.env.PASSWORD,
database:'node-complete'
})

module.exports=connect.promise();