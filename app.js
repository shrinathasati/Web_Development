const express=require('express')
const path = require('path')
const app=express()
let port=80;
const fs=require("fs")

app.use('/static',express.static('static'))
app.use(express.urlencoded())
app.set("view engine",'pug')
app.set('views',path.join(__dirname,'views'))

app.get('/', (req, res) => {
    res.status(200).render('index.pug');
});
app.get('/cart', (req, res) => {
    res.status(200).render('cart.pug')
});
app.get('/help', (req, res) => {
    res.status(200).render('help.pug')
});
app.get('/shop', (req, res) => {
    res.status(200).render('shop.pug')
});
app.get('/about', (req, res) => {
    res.status(200).render('about.pug')
});
app.get('/service', (req, res) => {
    res.status(200).render('service.pug')
});


app.listen(port,()=>{
    console.log(`Ram Shyam Traders website is running on ${port}`);
});