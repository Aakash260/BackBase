const mongoose=require('mongoose')
 
const DB=process.env.VITE_DATA_BASE

 mongoose.connect(DB).then(()=>{
    console.log('connection')
}).catch((err)=>{
    console.log(err)
})


 

 