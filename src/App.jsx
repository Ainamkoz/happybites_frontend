import './App.css'
import {makeStyles} from "@material-ui/core/styles";
import {Switch ,Route} from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';
import Allcompanies from './components/allCompanies';
import Company from './components/company';
import Inspiration from './components/inspiration';
import Insproduct from './components/insProduct';
import CompanyBook from './components/companyBook';
import Eventplan from './components/eventPlan';




function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/About' component={About}/>
      <Route exact path='/Allcompanies' component={Allcompanies}/>
      <Route exact path='/Allcompanies/:company' component={Home}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/' component={Home}/>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
