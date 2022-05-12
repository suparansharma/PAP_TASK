// const express = require('express');
// const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;

// const password ="gxtcrX4rleTWPYWw";


// const uri = "mongodb+srv://organicUser:gxtcrX4rleTWPYWw@cluster0.xmxhi.mongodb.net/organicdb?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
// app.get('/', (req, res) => {
//     // res.send('hello i am working');
//     res.sendFile(__dirname + '/index.html');
// })


// client.connect(err => {
//   const productCollection = client.db("organicdb").collection("products");

//   app.post("/addProduct",(req,res)=>{
//       const product = req.body;
//       productCollection.insertOne(product)
//       .then(result=>{
//         console.log('data added successfully');
//         res.send('successfully');
//       })
      
//   })

// //   const product = {name:"sugger",price:20,quantity:20};
// //   collection.insertOne(product)
// //   .then(result => {
// //       console.log('one product inserted');
// //   })
// //   console.log("database connected successfully");
//   // perform actions on the collection object
// //   client.close();
// });
// ////server site


dsfbvdsfgdfgesrgerg



const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectId;

const password ="gxtcrX4rleTWPYWw";


const uri = "mongodb+srv://organicUser:7tvCHhEbhVCZFefy@cluster0.xmxhi.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/',(req,res) => {

    // res.send('Hello I am working');
    res.sendFile(__dirname + '/index.html');

})






client.connect(err => {
  const productCollection = client.db("organicdb").collection("products");

  app.get('/products',(req,res) => {
    productCollection.find({}).limit(10)
    .toArray((err,documents) =>{
      res.send(documents);
    })
  })


  app.get('/product/:id',(req,res)=>{
    productCollection.find({_id: ObjectId(req.params.id)})
    .toArray((err, documents)=>{
      res.send(documents[0]);
    })
  })


  app.post("/addProduct",(req,res) => {

    const product = req.body;
    productCollection.insertOne(product)
    .then(result =>{
      console.log("data added successfully");
      res.redirect('/');
    })
    // console.log(product);

  })



  app.patch('/update/:id',(req,res)=>{
    console.log(req.body.price);
    productCollection.updateOne({_id: ObjectId(req.params.id)},
    {

      $set:{price: req.body.price, quantity: req.body.quantity}

    })
    .then(result=>{
      console.log(result);
      res.send(result.matchedCount > 0);
    })
  })


  app.delete('/delete/:id',(req,res)=>{
    productCollection.deleteOne({_id: ObjectId(req.params.id)})
    .then(result =>{
      res.send(result.deletedCount > 0);
      console.log(result);
    })
    // console.log(req.params.id);
  })


//   const product = {name:"modhu",price:25,quantity:10};
//   collection.insertOne(product)
//   .then(result => {
//       console.log('one product inserted');
//   })
//   console.log("database connection");
//   // perform actions on the collection object
// //   client.close();
});
app.listen(3001);