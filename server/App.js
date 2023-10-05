const express=require('express');
  
const app=express();

const dotenv=require('dotenv')

const cors=require('cors')

dotenv.config({path:'./config.env'})

require('./db/conn.js');

const cookieParser = require('cookie-parser');

app.use(cookieParser());
 
const PORT=process.env.VITE_PORT

app.use(cors({
    origin:['http://localhost:5173'],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

app.use(express.json())

app.use(require('./router/auth.js'))



app.listen(`${PORT}`,()=>{
    console.log('server Runing')
})

console.log('hi')