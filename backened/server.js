const express = require('express');
const app = express();
const conn = require('./conn/conn');
const auth = require('./Routes/Auth');
const list=require('./Routes/list');

app.use(express.json());


conn();


app.get('/', (req, res) => {
    res.send("Hello, welcome to the server!");
});



app.use("/api/v1", auth);
app.use("/api/v2",list);

// Start the server
app.listen(1000, () => {
    console.log("Server started on port 1000");
});
