const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3000

const app = express();

app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

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


app.get('/formulario', async (req, res) => {
   res.render('forms');
});

app.get('/comments', async (req, res) => {
    try {
        const allComments = await Users.find(); 
        res.render('comments', { comments: allComments }); 
    } catch (err) {
        console.error("Erro ao buscar os comentários:", err);
        res.status(500).send("Erro ao carregar os comentários");
    }
});

app.get('/', async (req, res) => {
    try {
        const comments = await Users.aggregate([{ $sample: { size: 3 } }]);
        res.render('index', { comments: comments }); // Passa os comentários para o index.ejs
    } catch (err) {
        console.error("Erro ao buscar os comentários:", err);
        res.status(500).send("Erro ao carregar os comentários");
    }
});

app.listen(port,()=>{
    console.log("Servidor rodando");
})