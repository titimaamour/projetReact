import {Link} from 'react-router-dom'
function Header() {
    return (

	//FICHIER POUR CREE UN HEADER
	 <header className="header">
		{/* HEADER EST DECOMPOSER EN TROIS*/}
		<div className="logo">
		</div>
		<div className="menu">
			<Link to='/'>Accueil</Link>
			<a href="http://localhost:3000/#about">A propos</a>
			<a href="http://localhost:3000/#faq">FAQ</a>
			<a href="http://localhost:3000/#contact">Contact</a>
			<Link to='/connexion'>Connection</Link>
			<Link to='/inscription'>inscription</Link>

		</div>
		
	 </header>
    );
  }
  
  export default Header;
  