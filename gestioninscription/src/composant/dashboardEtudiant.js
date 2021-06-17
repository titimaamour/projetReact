import {Component} from 'react'

class DashboardEtudiant extends Component{

  state={
    user:[]
  }
  authentification=async(mail,mdp,role)=>{
    const response = await fetch(`/connection/${role}/${mail}/${mdp}`)
    let body = await response.json()
    // console.log(body)
    if(response.status !=200) throw Error(body.message)
    return body
  }
  deconnection=()=>{
    localStorage.clear()
    window.location.assign('/connexion')
  }
  componentDidMount(){
    const mail = localStorage.getItem('mail');
    const mdp = localStorage.getItem('mdp')
    const role = localStorage.getItem('role')
    if(mail == ''||mdp==''||role==''){
      window.location.assign('/connexion')
    }else{
      this.authentification(mail,mdp,role)
        .then(res=>{
          this.setState({user:res.connection[0]})
        })
    }
  }
  render(){
    const {user} = this.state;

      const InfoUser = (props)=>{
        console.log(user)
        if(props.status == 'attente'){
          {/* ATTENTE */}
          return(
            <h4>
              Votre dossier au nom de, {user.nom}, est en attente 
              vous etes inscrit dans la classe de {user.filiere}
            </h4>
          )
        }else if(props.status == 'inscrit'){
          {/* ACCEPTER */}
          return(
              
            <h4>
              Felicitation, {user.nom}, vous avez ete accepter 
              avec le matricule SIDK{user.id} dans la classe de 
              {user.filiere}
            </h4>
          )
        }else if(props.status == 'rejeter'){
          
          return(
            <h4>
              Votre dossier au nom de, {user.nom}, a ete rejeter 
               pour l'inscription dans la classe de {user.filiere}
            </h4>
          )
          
        }else{
          return(
            <h1>Chargement...</h1>
          )
        }
      }
      return (
        <div className="dashboard">        
          <div>

            
              <InfoUser status={user.status}/>
              
              
              {/* information */}
              <h4>
                  Contacter l'administration au numero +221 77 569 32 15
                  pour plus d'information...

              </h4>
              
          </div>
          <div className='utilitaire'>
              <button onClick={this.deconnection} className='color1'> Deconnexion</button>
          </div>
        </div>
      );
      
  }
}
  
  export default DashboardEtudiant;