const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware
const app = express();
const db = require('./dbConnection');
const User = require('./Modal/UserModal');
const userController = require('./controller/userController');
const adminController = require('./controller/adminController');
const Admin=require('./Modal/AdminModal')
const contactController = require('./controller/contactController')
const Contact = require('./Modal/ContactModal')
const dashboardRoutes = require('./router/dashboardRouter');
const tarinerRouter = require('./router/trainerRouter')

// Add middleware to parse JSON bodies
app.use(bodyParser.json());

// Use cors middleware
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});
app.use('/', dashboardRoutes);

app.use('/',tarinerRouter);

// app.get("/Dashboard",async (req,res)=>{
//   let result = await userController.signup(req)
//   console.log({result})
//   return res.append(result)
// })

app.post("/login", async (req,res)=>{
  let result = await userController.login(req)
  console.log({result})
  if(result === "User not exist" || result === "password incorrect"){
    return res.status(500).json({"message" : result});
  }
  return res.send(result)
})

app.post("/adminlogin", async (req,res)=>{
  let result = await adminController.adminlogin(req)
  console.log({result})
  return res.send(result)
})


app.post("/signup", async (req, res) => {
  console.log(req.body, 'kk123');
  let result = await userController.signup(req)
  return res.status(200).json({"message" : result});
});

app.post("/contact", async (req, res) => {
  let result = await contactController.contact(req)
  return res.status(200).json({"message" : result});
});
app.post("/forget", async (req,res)=>{
  let result = await userController.forget(req)
  if(result === "email does not exist"){
    return res.status(500).json({"message": result})
  }
  console.log({result})
  return res.send(result)
})

app.post("/updatePassword", async (req,res)=>{
  let result = await userController.updatePassword(req)
  if(result === "email does not exist"){
    return res.status(500).json({"message": result})
  }
  else if(result === "OTP does not match"){
    return res.status(500).json({"message": result})
  }
  
  console.log({result})
  return res.send(result)
})

app.listen(3005);
console.log('Server is running on port 3005kkkk');