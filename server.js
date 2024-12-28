const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3019

const app = express();

app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://andersonmaia63:c0bral1ng0@sunrisecluster.gflir.mongodb.net/Festivale')
const db = mongoose.connection
db.once('open',()=>{
    console.log("Mongodb connection sucessful")
})

const userSchema = new mongoose.Schema({
    nome: String,
    estado: String,
    festival:String,
    comentario:String
})

const Users = mongoose.model("comentarios", userSchema)


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,"forms.html"))
})

app.post("/post", async (req, res)=>{
     const {nome, estado, festival, comentario} = req.body;
     const user = new Users({
        nome,
        estado,
        festival,
        comentario
     })
     await user.save()
     console.log(user)
     res.send("Formulário Enviado!");
})

app.listen(port,()=>{
    console.log("Servidor rodando");
})