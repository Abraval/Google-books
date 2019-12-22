import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/Nav";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";



function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Books}/>
          <Route exact path="/saved" component={Books}/>
          <Route component={NoMatch} />
        </Switch>
        
      </div>
    </Router>
  )
}

export default App;