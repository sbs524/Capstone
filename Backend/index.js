const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

const port = 27017;
app.listen(port, ()=>{
    console.log("server", port)
})

// app.get("/", (req, res)=>{
//     res.sendFile(path.join(__dirname, "./build", "index.html"))
// })

//프론트에서 사용할때
app.use('/broccoli', require('./routes/broccoliRouter'));
app.use('/uploads', express.static('uploads'));