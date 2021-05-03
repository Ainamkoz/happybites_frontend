import './App.css'
import {makeStyles} from "@material-ui/core/styles";
import {Switch ,Route} from 'react-router-dom';
import ProtectedRoute from './components/auth/protectedRoute'
import Header from './components/header/header';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';
import Allcompanies from './components/allCompanies';
import Company from './components/company';
import Inspiration from './components/inspiration';
import Companybook from './components/companyBook';
import Eventplan from './components/eventPlan';
import Signin from './components/auth/signIn';
import Signup from './components/auth/signUp';
import SecretInfo from './components/auth/secretInfo';
import Notfound from './components/notFound';
import "typeface-heebo";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import pink from '@material-ui/core/colors/pink';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: pink[900],
        },
        secondary: {
          main: cyan[800]
        },
      },
      typography: {
        fontFamily: [
          'Heebo',
          'sans-serif',
        ].join(','),
      },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Header/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/collaborators' component={Allcompanies}/>
      <Route exact path='/collaborators/:id' component={Company}/>
      <Route exact path='/plan-your-event' component={Eventplan}/>
      <Route exact path='/plan-your-event/:id' component={Companybook}/>
      <Route exact path='/inspiration' component={Inspiration}/>
      <Route exact path='/sign-in' component={Signin} />
      <Route exact path='/sign-up' component={Signup} />
      <ProtectedRoute exact path='/secret-info' component={SecretInfo} />
      <Route exact path='*' component={Notfound}/>
    </Switch>
    <Footer />
    </MuiThemeProvider>
  );
}

export default App;