const express = require("express");
const app = express();

app.use('/hello', (req, res) => {
  res.send('Hello JS')
})

app.listen(8080, () => {
    console.log('server is running in 8080 port')
})