const express = require('express');
const mysql = require('mysql');

const app = express();

app.set('view engine','ejs');
app.set('views','IHM');

app.use(express.static("public"));// cette ligne de code permet d'inserer des ressources statisques

app.get('/',(req,res)=>{
   res.status(200).render('index')
})

app.listen(3000);
console.log('Le serveur est prêt...');