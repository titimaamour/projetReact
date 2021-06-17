const express = require("express")
const mysql = require('mysql')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const db = mysql.createConnection({
     host:"localhost",
     user:"root",
     password:"",
     database:"appligestion"
})


const port = 3050
app.get('/connection/:role/:mail/:mdp',(req,res)=>{
     const requeteSQL = `SELECT * from ${req.params.role} WHERE mail='${req.params.mail}' AND mdp='${req.params.mdp}' `;
     db.query(requeteSQL,(err,resultat)=>{
          if(err) throw err;
          const response = Array(resultat)
          const taille = response[0].length
          if(taille==0) res.send({connection:false})
          res.send({connection:resultat})
     })
})
app.get('/affiche/etudiant',(req,res)=>{
     const requeteSQL = `SELECT * from etudiant WHERE status='attente' `;
     db.query(requeteSQL,(err,resultat)=>{
          if(err) throw err;
          res.send(resultat)
     })
})
app.get("/inscription/valider/:id",(req,res)=>{

     const sqlQuery = `UPDATE etudiant SET status='inscrit' WHERE id = '${req.params.id}' `
     db.query(sqlQuery,(err, result)=>{
          if(err) throw err;
          console.log(result);
          res.send(result)
     })
})
app.get("/inscription/rejeter/:id",(req,res)=>{

     const sqlQuery = `UPDATE etudiant SET status='rejeter' WHERE id = '${req.params.id}' `
     db.query(sqlQuery,(err, result)=>{
          if(err) throw err;
          console.log(result);
          res.send(result)
     })
})


app.get("/inscription/:nom/:prenom/:sexe/:mail/:date/:mdp/:annee/:filiere",(req,res)=>{

     
     const user ={
          nom:`${req.params.nom}`,
          prenom : `${req.params.prenom}`,
          sexe : `${req.params.sexe}`,
          mail : `${req.params.mail}`,
          date_naissance : `${req.params.date}`,
          mdp : `${req.params.mdp}`,
          annee_inscrip : `${req.params.annee}`,
          filiere : `${req.params.filiere}`,
     }
     const sqlQuery = "INSERT INTO etudiant SET ?";
     db.query(sqlQuery, user, (err, result)=>{
          if(err) throw err;
          console.log(result);
          res.send({status:true})
     })
})


db.connect(err=>{
     if(err) throw err;
     console.log("MYSQL DEMARRER")
})

app.listen(port,()=>{
     console.log("Demarrer sur"+port);
})