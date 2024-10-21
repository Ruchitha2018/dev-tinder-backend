const express = require("express");
const app = express();
const connectDB = require('../src/config/database')
const User = require("./models/user");

app.post('/signup', async (req, res) => {
    const userObj = {
      firstName: 'Ruchitha',
      lastName: 'Deshpande',
      emailId: 'abc@gmail.com',
      password: '12345abc'
    }
    const user = new User(userObj);
    await user.save();
    res.send("User Added")
})



connectDB().then(() => {
  console.log("Database connected")
  app.listen(8080, () => {
    console.log('server is running in 8080 port')
})
})
.catch(err => {
  console.log("Database cannot be connected", err)
})