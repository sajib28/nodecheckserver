var express = require('express');
var app = express();
app.use(express.json());
app.get("/", (req, res) => {
   res.send("Working")
});
app.listen(process.env.PORT||5000);