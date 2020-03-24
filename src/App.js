import React from 'react';
import {Route, BrowserRouter as Router, Switch, withRouter} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';


import "./App.css";
import Home from './Components/Home';
import Work from './Components/Work';

class App extends React.Component {
  static displayName = App.name;


  render(){
    return (
      <Router className="App" basename={`${process.env.PUBLIC_URL}/`}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={this.props.history} key={this.props.history}>
            <Route exact path='/work' render={(props)=><Work history={props.history}/>} />
            <Route exact path='/' render={(props)=><Home history={props.history}/>} />
          </Switch>
        </AnimatePresence>
      </Router>
    );
  }
}

export default App;
