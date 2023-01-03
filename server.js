const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.static(__dirname + '/public'));
app.listen(PORT);
console.log("Server Started");
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/public/index.html'))
})

app.get("/api",




(req,res) => {


    

    const spawn = require('child_process').spawn;
    const process = spawn('python',['./main.py',
    req.query.URI]);
  
    process.stdout.on('data', (data) => {res.send(data.toString())});

    
}

)

app.get("graphic2.png", 
(req,res) => {
  res.sendFile(path.resolve(__dirname +'/public/graphic2.png'))
}

)

app.get("graphic3.png", 
(req,res) => {
  res.sendFile(path.resolve(__dirname +'/public/graphic3.png'))
}

)

app.get("graphic4.png", 
(req,res) => {
  res.sendFile(path.resolve(__dirname +'/public/graphic4.png'))
}

)

app.get("*",

(req,res) => {
  res.sendFile(path.resolve(__dirname +'/public/error.html'))
}
)