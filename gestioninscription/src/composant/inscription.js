import {Component} from 'react'

class Insciption extends Component {
  
  newInscritpion= async(nom,prenom,sexe,mail,date,mdp,annee,filiere)=>{
    let response = await fetch(`/inscription/${nom}/${prenom}/${sexe}/${mail}/${date}/${mdp}/${annee}/${filiere}`)
    const body = await response.json()
    console.log(body)
    if(response.status != 200) throw Error(body.message)
    return body
  }
  inscriptionBtn=(e)=>{
    console.log(e);
    e.preventDefault();
    const nom = document.getElementById('nom')
    const prenom = document.getElementById('prenom')
    const mail = document.getElementById('mail')
    const sexe = document.getElementById('sexe')
    const mdp = document.getElementById('mdp')
    const date = document.getElementById('date')
    const filiere = document.getElementById('filiere')
    const annee = document.getElementById('annee')

    if(nom.value =='' || prenom.value==''|| mail.value==''||sexe.value=='null'|| mdp.value==''||date.value==''||filiere.value=='null'||annee.value=='null'){
      alert("Veuillez remplir tout les champs !")
    }else{
      this.newInscritpion(nom.value,prenom.value,sexe.value,mail.value,date.value,mdp.value,annee.value,filiere.value)
        .then(res=>{
          localStorage.setItem("role","etudiant")
          localStorage.setItem("mail", mail.value)
          localStorage.setItem("mdp", mdp.value)
          window.location.assign("/dashboard/etudiant")
        })
    }
  }
  componentDidMount(){

  }
  render(){
      
      return (
        <div className="connection">
          <div className="connect">
              <div className="left">
                  <h3 className="inscription">Inscription</h3>
                  <form>
                    <input id='nom' placeholder='Nom' type="text"></input>
                    <input id='prenom' placeholder="prenom" type="text"></input>
                    <select id='sexe'>
                      <option value='null'>Sexe :</option>
                      <option value='homme'>Homme</option>
                      <option value='femme'>Femme</option>
                    </select>
                    <input id='mail' placeholder="Email " type="email"></input>
                    <input id='mdp' placeholder="mot de passe" type="password" ></input>
                    <input id='date' placeholder="date de naissance : jj-mm-aaaa" type="text" ></input>
                    <select id='filiere'>
                      <option value='null'>Choisir votre filiere:</option>
                      <option value='Web Dev'>Web Dev</option>
                      <option value='Dev Appli'>Dev Appli</option>
                      <option value='Cybersecurite'>Cybersecurite</option>
                    </select>
                    <select id='annee'>
                      <option value='null'>Choisir votre niveau</option>
                      <option value='Licence 1'>Licence 1</option>
                      <option value = 'Licence 2'>Licence 2</option>
                      <option value='Licence 3'>Licence 3 </option>
                      <option value = 'Master I'>Master I </option>
                      <option value='Master II'>Master II </option>
                    </select>
                    
                    <button onClick={this.inscriptionBtn} className="color1">Inscription</button>
                  </form>
                </div>

              <div className="right inscription"></div>
          </div>

          

        </div>
      );
      
    }
}
  
  export default Insciption;