
const cors = require('cors')

// express server
const express = require("express");
const app = express();
// database
const mongoose = require("mongoose")
const dbUrl= 'mongodb+srv://hasnain:Mal.008.@clusteruser.iz8pd.mongodb.net/ClusterUser?retryWrites=true&w=majority'
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=> console.log('db is connected'))
.catch((err)=> console.log(err))

const model = require('./models/userModel')
app.get('/',async(req,res)=>{
    const UserModel= await new model({
        name:"Hasnain MaliCK",
        email:'malik@gmail.com',
        password:'Mal431..'
    });
    UserModel.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})




// middleware
app.use(cors())
app.use(express.json())

app.post('/api/request',async (req,res)=>{
    // alert(req.body);
    // try{
    //     await model.create({
    //         name: req.body.name,
    //         email:req.body.email,
    //         password:req.body.password
    //     })
    //     res.json({status:'ok'})
    // }catch(err){
    //     res.json({status:'ok',error:" DuplicatEmail"})
        
    // }
        const UserModel= await new model({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        UserModel.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
// }

app.get('/',(req,res)=>{
    res.send('I am from backend server')
})


app.listen(5000,(req,res)=>{
    console.log("I am listening at port 5000")
})