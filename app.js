const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv").config();

app.listen(process.env.PORT, () => 
console.log('Estamos en este servidor'+ process.env.PORT));


app.use(express.static("public"));

app.get('/', (req, res) => {
    let home = path.join(__dirname, './views/home.html')
    res.sendFile(home)
})

app.get('/register', (req, res) => {
    let home = path.join(__dirname, './views/register.html')
    res.sendFile(home)
})

app.get('/login', (req, res) => {
    let home = path.join(__dirname, './views/login.html')
    res.sendFile(home)
})