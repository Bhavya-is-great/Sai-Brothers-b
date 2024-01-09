// const axios = require('axios');

// axios.post('/getitem',{table:"pproducts",id:id})
//         .then(res => {
//             console.log(res)
//             setName(res.data[0].title)
//             setPrice(res.data[0].price)
//             setImage(res.data[0].image)
//             setQuantity(res.data[0].quantity)
//         })
//         .catch(err => console.log(err))

const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'db.oamskkvtiaukoicxpkke.supabase.co',
    user: 'postgres',
    password:'Bhavya4343@4343',
    database:'postgres',
    port:'5432'
})

// console.log(db);

db.query("SELECT * FROM vegetables",(err,data)=>{
    console.log(err);
    console.log(data);
})
