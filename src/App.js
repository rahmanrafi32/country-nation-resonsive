import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from "./components/About/About";
import CountryDetails from './components/CountryDetails/CountryDetails';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/country/details/:name' component={CountryDetails} />
        {/* <Route path='/country' component={Country} /> */}
        <Route path='/about' component={About} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
