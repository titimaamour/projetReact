import {Component} from 'react'

class Home extends Component {

    componentDidMount(){
        const accordionBtns = document.querySelectorAll(".accordion");
        accordionBtns.forEach((accordion) => {
        accordion.onclick = function () {
            
            this.classList.toggle("is-open");
            let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            //this is if the accordion is open
            content.style.maxHeight = null;
        } else {
            //if the accordion is currently closed
            content.style.maxHeight = content.scrollHeight + 'px';
            }
        };
        });
    }

    render(){
            
        return (
        <div className="home">

            <div className="page accueil">
                <div className="containerText">
                    <h1>DES SUPER ETUDIANTS CHEZ NOUS !</h1>
                </div>
            </div>

            <div id='about' className="page propos">
                <h2>A propos</h2>

                <div className="information">
                    <div className="containerImg">

                    </div>
                    <div className="infoTxt">
                        <h3>INTERNATIONAL I T ACADEMY OF DAKAR</h3>
                        <p>Etablissement d'enseignement Supérieur agréé, basé à Dakar (Sénégal), l'institut SUP'INFO forme depuis plus d'une vingtaine d'années des générations d'étudiants africains issus des quatre coins du continent . Centre de certifications internationales et partenaire de différentes grandes institutions, SUP'INFO vous accueille pour des formations orientées 'Entreprise', par une approche pédagogique novatrice à forte composante technologique.
                        Créativité et Innovation sont les maîtres mots de cet espace entièrement dédié à la communication DIGITALE. L'institut SUP'IMAX est le lieu idéal d'immersion des jeunes talents inspirés par une carrière touchant à l'Audiovisuel Numérique ou aux Arts Graphiques . De Graphic Designer à Web Analyst en passant par l'animation 3D ou la réalisation RADIO/TV, vous évoluerez au sein de SUP'IMAX en profitant de STUDIOS PROfessionnels et du meilleur encadrement technique.
                        </p>
                        <span>
                        <a href="http://localhost:3000/inscription">
                            <button className='bouton color1'>
                                s'inscrire
                            </button>
                        </a>
                        <a href="http://localhost:3000/connexion">
                            <button className='bouton color1'>
                                se connecter
                            </button>
                        </a>

                            
                            
                        </span>
                    </div>
                </div>

                <div className="filiere">

                    <div className="filiereChild web">
                        <h3>Web</h3>
                    </div>

                    <div className="filiereChild secu">
                        <h3>Securite</h3>
                    </div>
                    
                    <div className="filiereChild info">
                        <h3>info gestion</h3>
                    </div>
                    
                </div>
            </div>
            <div id='faq' className="page FAQ">
                <div class="container">
                    <h1>FAQ</h1>
                    <button class="accordion">Comment se déroule la formation ?
                    </button>
                    <div class="accordion-content">
                        <p>
                        Une fois votre parcours sélectionné, il vous suffit de souscrire pour avoir immédiatement accès à votre formation diplômante.<br/><br/>

                        Le fonctionnement de la formation est relativement simple mais pas nécessairement intuitif si vous êtes habitué à des formations traditionnelles.<br/><br/>

                        Vous n'allez pas suivre des cours qui aboutissent à des examens sanctionnés par des notes. 
                        A SUP'INFO, vous allez réaliser des projets qui aboutissent à des soutenances pour valider l'acquisition de compétences.
                        </p>
                    </div>
                    <button class="accordion">Qu'est-ce qu'un parcours A SUP'INFO ?</button>
                    <div class="accordion-content">
                        <p>Nos formations vous permettent de monter en compétence et obtenir des diplômes de niveaux reconnus par l’État.<br/><br/> Offrant à la sortie un niveau Bac+3 à Bac+5, ce sont des parcours professionnalisants sur des métiers en tension, pour lesquels les entreprises peinent à trouver des profils qualifiés.<br/><br/>

                            L'accès à la plupart d'entre eux nécessite seulement un niveau Bac, d'autres un niveau d’études supérieur, voire l’évaluation de vos compétences</p>
                    </div>
                    <button class="accordion">Comment choisir mon parcours diplômant ?</button>
                    <div class="accordion-content">
                        <p>Sur la partie dedié a <a href="http://localhost:3000/#about">A propos</a>, vous pouvez trier les formations en fonction des catégories, si tant est que vous soyez déjà décidé sur votre orientation professionnelle</p>
                    </div>
                </div>
            </div>

            <div id='contact' className="page contact">
                <h2>Retrouvez nous :</h2>
                <div className='mapCont'>

                </div>
                <div className="socialCont">
                    <a href="facebook.com" className='socialdChild facebook'>
                        <span className='social'>
                            
                        </span>
                    </a>
                    <a href="twitter.com" className='socialdChild twitter'>
                        <span className='social'>
                            
                        </span>
                    </a>
                    <a href="linkedin.com" className='socialdChild linkedin'>
                        <span className='social'>
                            
                        </span>
                    </a>
                    <a href="instagram.com" className='socialdChild instagram'>
                        <span className='social'>
                            
                        </span>
                    </a>
                    
                </div>
                <h2>+221 77 896 23 14 / 33 822 02 01</h2>


            </div>

        </div>
        );
        
    }
  }
  
  export default Home;