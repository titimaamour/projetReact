
import {Switch, Route} from 'react-router-dom'
import Header from "./composant/header"
import Home from "./composant/home"
import './style.css';
import Connection from "./composant/connection"
import Inscription from './composant/inscription';
import DashboardEtudiant from './composant/dashboardEtudiant';
import DashboardAdmin from './composant/dashboardAdmin';

function App() {
  return (
    <div className="App">
      {/* CREATION DU HEADER */}
      <Header/>
      {/* CREATION DE LA PAGE HOME */}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/connexion' component={Connection}/>
        <Route exact path='/inscription' component={Inscription}/>
        <Route exact path='/dashboard/etudiant' component={DashboardEtudiant}/>
        <Route exact path='/dashboard/utilisateur' component={DashboardAdmin}/>
      </Switch>
    </div>
  );
}

export default App;
