import {Component} from 'react'


class Dashboardadmin extends Component {
  
  state={
    etudiant:[]
  }
  getEtudiant=async()=>{
    const response = await fetch(`/affiche/etudiant`)
    let body = await response.json()
    // console.log(body)
    if(response.status !=200) throw Error(body.message)
    return body
  }
  deconnection=()=>{
    localStorage.clear()
    window.location.assign('/connexion')
  }
  toggleEtudiant=async(id,trigger)=>{
    const response = await fetch(`/inscription/${trigger}/${id}`)
    let body = await response.json()
    if(response.status !=200) throw Error(body.message)
    return body
  }
  rejeter = (e)=>{
    console.log(e.target.value)
    this.toggleEtudiant(e.target.value,"rejeter")
      .then(()=>{
        this.getEtudiant()
          .then(res=>{
            this.setState({etudiant:res})
          })
      })

  }
  valider = (e)=>{
    console.log(e.target.value)
    this.toggleEtudiant(e.target.value,"valider")
      .then(()=>{
        this.getEtudiant()
          .then(res=>{
            this.setState({etudiant:res})
          })
      })

  }
  
  componentDidMount(){
  
    this.getEtudiant()
      .then(res=>{
        this.setState({etudiant:res})
      })
    
  }
  render(){
      const {etudiant} = this.state
      return (
        <div className="dashboard">        
          <div>
            <h2>Liste des inscriptions</h2>
          <table>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>mail</th>
              <th>date de naissance</th>
              <th>adresse</th>
              <th>Filiere</th>
              <th>Annee d'inscription</th>
              <th>accepter</th>
              <th>rejeter</th>
            </tr>
            {etudiant.map(etu=>{
              return(
                
                <tr>
                  <td>{etu.nom}</td>
                  <td>{etu.prenom}</td>
                  <td>{etu.mail}</td>
                  <td>{etu.date_naissance}</td>
                  <td>{etu.adresse}</td>
                  <td>{etu.filiere}</td>
                  <td>{etu.annee_inscrip}</td>
                  <td><button onClick={this.valider} className='positive' value={etu.id}>Accepter</button></td>
                  <td><button onClick={this.rejeter} className='negative' value={etu.id}>Rejeter</button></td>
                </tr>
              )
            })}
            
            
        </table> 
          </div>
          <div className='utilitaire'>
                <button onClick={this.deconnection} className='color1'> Deconnexion</button>
            </div>
            
        </div>
      );
      
  }
}
  
  export default Dashboardadmin;