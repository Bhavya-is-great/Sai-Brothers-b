const express = require('express');
const app = express();
const cors = require('cors');
const {createClient} = require('@supabase/supabase-js');
require('dotenv').config()

app.use(cors());
app.use(express.json());

app.post('/allitem',async (req,res)=>{
    const url = process.env.URL;
    const anon = process.env.anon;
    const supabase = createClient(url,anon);
    const table = req.body.table;

    const {data,error} = await supabase
    .from(table)
    .select();

    if (data) {
        // console.log(data)
        res.json(data);
    }
    if(error){
        // console.log(error)
        res.json(error);
    }
});

app.post('/getitem',async (req,res)=>{
    const url = process.env.URL;
    const anon = process.env.anon;
    const supabase = createClient(url,anon);
    const table = req.body.table;
    const id = req.body.id;

    const {data,error} = await supabase
    .from(table)
    .select()
    .eq('id',id)

    if (data) {
        // console.log(data)
        res.json(data);
    }
    if(error){
        // console.log(error)
        res.json(error);
    }
});

app.post('/deleteitem',async (req,res)=>{
    const url = process.env.URL;
    const anon = process.env.anon;
    const supabase = createClient(url,anon);
    const table = req.body.table;
    const id = req.body.id;

    const {data,error} = await supabase
    .from(table)
    .delete()
    .eq('id',id)

    if (data) {
        // console.log(data)
        res.json({deleted: true});
    }
    if(error){
        // console.log(error)
        res.json(error);
    }
    res.json({deleted: true});
});

app.post('/updateditem',async (req,res)=>{
    const url = process.env.URL;
    const anon = process.env.anon;
    const supabase = createClient(url,anon);
    const table = req.body.table;
    const id = req.body.id;
    const title = req.body.title;
    const price = req.body.price;
    const image = req.body.image;

    console.log(id);

    const {data,error} = await supabase
    .from(table)
    .update({title:title,price:price,image:image})
    .eq('id',id);

    // console.log(data);
    // console.log(error);

    if (data) {
        res.json({updated:true})
    }
    if ((error)) {
        res.json(error)
    }
});

app.post('/additem',async (req,res)=>{
    const url = process.env.URL;
    const anon = process.env.anon;
    const supabase = createClient(url,anon);
    const table = req.body.table;
    const title = req.body.title;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const image = req.body.image;

    console.log(table,title,quantity,price,image);

    const {data,error} = await supabase
    .from(table)
    .insert({title:title,quantity:quantity,price:price,image:image});

    if (data) {
        // console.log(data)
        res.json(data);
    }
    if(error){
        // console.log(error)
        res.json(error);
    }
});

app.listen(8081,()=>{
    console.log("Listening...");
})