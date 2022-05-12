const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const users = ['MR x','MR Y','MR Z','MR A','MR B']

app.get('/', (req, res)=>{

    const fruit ={
        products:'ada',
        price:200
    }
    res.send(fruit);
})


app.get('/fruits/banana', (req, res)=>{
    res.send({fruits:'banana',quantity:1000,price:10000});
})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const name = users[id];
    res.send({id,name})
})


app.post('/addUser', (req, res)=>{
    // console.log("Data Recieved",req.body);
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(req.body);
})

app.listen(3000, () =>console.log('Listen to port 3000'));