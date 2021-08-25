
import './App.css';
import Home from './component/home/Home';
import Shope from './component/shope/Shope';
import Produits from './component/Produits/Produits';
import Sign from './component/singlogin/Sign';
import Login from './component/singlogin/Login';
import React from "react";
import {BrowserRouter as Router, Route,Link,NavLink} from "react-router-dom";
//import 'bootstrap-css-only/css/bootstrap.min.css';





function App() {
  return (
    <Router>
    <div className="app">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">

          <Link className="navbar-brand text-light" to="/bb">&nbsp; &nbsp; &nbsp; &nbsp; Shoping </Link>
    
          <NavLink className="nav-link  text-light"   exact to="/"  >  &nbsp; &nbsp;Home</NavLink>
        
          <NavLink className="nav-link text-light" to="/Produits"  > Produit</NavLink>
        
          <NavLink className="nav-link  text-light" to="/Shope"  >Shope</NavLink>
          <NavLink className="nav-link  text-light" to="/Sign"  >Sign Up</NavLink>
          <NavLink className="nav-link  text-light" to="/Login"  >Log in </NavLink>
      </nav>
   <Route path="/"  exact component={Home} ></Route> 
   <Route path="/Produits" component={Produits} ></Route> 
   <Route path="/shope" component={Shope} ></Route> 
   <Route path="/Sign" component={Sign} ></Route>
   <Route path="/Login" component={Login} ></Route>  
    </div>
    </Router>  );
}

export default App;
