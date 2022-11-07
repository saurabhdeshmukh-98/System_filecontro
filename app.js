const express = require('express')
const fs = require ('fs')
const app = express();
const router =require('./router/router')
const bodyParser = require('body-parser')
require ('dotenv').config()
const cors =require ('cors');
//const { application } = require('express');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))   

app.use(cors());


async function run(){
  try {
    app.use('/',router)
    app.listen(process.env.port,()=>{
        console.log(`server started on :${process.env.port}`)
    })
    
  } catch (error) {
    console.log(error.massage)
  }
}
run()