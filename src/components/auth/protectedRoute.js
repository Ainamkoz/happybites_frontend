import {Component, useContext} from 'react';
import{Route, Redirect} from 'react-router-dom';
import {AuthContext} from './context/authContext';

const ProtectedRoute = ( {component: Component, ...rest}) => {
    const{isAuthenticated} = useContext(AuthContext);
    return  isAuthenticated ? <Route {...rest} render= {()=> <Component />}/> : <Redirect to='/sign-in' />;
};

export default ProtectedRoute;