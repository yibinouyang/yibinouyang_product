const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static('app'));
app.get('/',(req,res)=>{
    console.log('at the home');
    res.sendFile(path.join(__dirname+'/product.html'));
})

app.listen(port,()=>{
    console.log(`Server running at ${port}`);
})