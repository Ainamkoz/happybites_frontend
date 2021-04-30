import {createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthState = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    const [authError, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) setIsAuthenticated(true)
    }, []);

    useEffect(() => {
        setTimeout(setError(''), 3000);
    }, [authError]);

    return <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser, authError, setError}} >{children} </AuthContext.Provider>;
};

export default AuthState;