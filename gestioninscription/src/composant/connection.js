import {Component} from 'react';

class Inscription extends Component {

  connection=async(mail,mdp,role)=>{
    const response = await fetch(`/connection/${role}/${mail}/${mdp}`)
    let body = await response.json()
    // console.log(body)
    if(response.status !=200) throw Error(body.message)
    return body
  }
  connectBtn=e=>{
    // console.log(e);
    e.preventDefault()
    const mail = document.getElementById('mail')
    const mdp = document.getElementById('mdp')
    const role = document.getElementById('role')
    if(mail.value==''||mdp.value==''||role.value=='null'){
      alert("Veuillez remplir tout les champs")
    }else{
      this.connection(mail.value,mdp.value,role.value)
        .then(res=>{
          if(res.connection == false){
            alert('Mot de passe ou email incorrect')
            mail.value = '';
            mdp.value = ''
          }else{
            console.log(res.connection[0])
            localStorage.setItem('mail',mail.value);
            localStorage.setItem('mdp',mdp.value)
            localStorage.setItem('role',role.value)
            window.location.assign(`/dashboard/${role.value}`)
          }
        })
    }

  }
  render(){
      
      return (
        <div className="connection">
          <div className="connect">
              <div className="left">
                <h3 className="connection">Connection</h3>
                  <form>
                    <label for="email"> Email </label>
                    <input type="email" name="email" id="mail"></input>
                    <label for="pseudo"> Mot de passe</label>
                    <input type="password" name="mdp" id="mdp"></input>
                    <select id='role'>
                      <option value='null'>Connection entant que:</option>
                      <option value='etudiant'>etudiant</option>
                      <option value='utilisateur'>utilisateur</option>
                    </select>
                    <button className='color1' onClick={this.connectBtn}>Connection</button>
                  </form>
                </div>

              <div className="right"></div>
          </div>

          

        </div>
      );
      
  }
}
  
  export default Inscription;