const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.static(__dirname + '/public'));
app.listen(PORT);
console.log("in server.js");
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/public/index.html'))
})

app.get("/api",




(req,res) => {


    //res.send("BEBEBEEBEBBEE")

    const spawn = require('child_process').spawn;
    const process = spawn('python',['./main.py',
    req.query.URI]);
  //data.toString()
    process.stdout.on('data', (data) => {res.send(data.toString())});

    //res.json({"myKey": ["this will be ","spotify","stats from the api..."]})
}

)


app.get("/bruh",


(req,res) => {res.send('how u doin')}


)

app.get("/sample",

(req,res) => { 

const spawn2 = require('child_process').spawn;
const process2 = spawn2('python',['./sample.py',req.query.URI])
process2.stdout.on('data', (data) => {res.send(data.toString())})

}


)

app.get("/ok",

(req,res) =>{ res.send(req.query.URI)}
)