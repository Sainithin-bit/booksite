const { ESRCH } = require('constants');
const express=require('express');
const path = require('path');

const app=express();


app.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.get('/singin.html', (req, res)=>{
    res.sendFile(path.join(__dirname, 'singin.html'));
})

app.get('/index.html',async (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));  

})
app.get('/1.css', async(req, res)=>{
    res.sendFile(path.join(__dirname, '1.css'))
})

app.get('/book_layout.html', async (req, res)=>{
    res.sendFile(path.join(__dirname, 'book_layout.html'))
})
app.listen(3000);

app.get('/style_home.css', (req, res)=>{
    res.sendFile(path.join(__dirname, 'style_home.css'))
})

app.get('/process.js', (req, res)=>{
    res.sendFile(path.join(__dirname, 'process.js'))
})

app.get('/book_layout.css', (req, res)=>{
    res.sendFile(path.join(__dirname, 'book_layout.css'))
})

app.post('/api/register', (req, res)=>{
    console.log(req.body);
    res.json({status:'ok'})
})
app.get('/1.jfif', (req, res)=>{
    res.sendFile(path.join(__dirname, '1.jfif'))
})
