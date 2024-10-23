const express = require("express");
const app = express();
const connectDB = require("../src/config/database");
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User Added");
});

app.get("/user", async (req,res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.find({ emailId: userEmail})
    res.send(user)
  }
  catch(err) {
    console.log(err);
  }
})

connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(8080, () => {
      console.log("server is running in 8080 port");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected", err);
  });
