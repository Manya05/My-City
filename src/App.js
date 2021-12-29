import React from 'react'
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Footer from './Components/Header_footer/footer';
import Header from './Components/Header_footer/header';
import './Resources/css/app.css';
import SignIn from './Components/Signin';
import Home from './Components/Home';
const App = (props) => {
  return (
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route path="/sign_in" exact component={SignIn}/>
      <Route path="/" exact component={Home}/>
    </Switch>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;