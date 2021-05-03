import {createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthState = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    const [authError, setError] = useState('');

    const logOut = ()=>{
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        const verifySession = async () => {
            const options = {
                headers:{
                    token
                }}
            const res = await fetch(`${process.env.REACT_APP_BACKEND}/me`, options);
            const {success} = await res.json();
            if (success) {
                console.log('Welcome back')
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem('token');
                setIsAuthenticated(false);
            }
        };
        verifySession()
    }, []);

    useEffect(() => {
        setTimeout(setError(''), 3000);
    }, [authError]);

    return <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser, authError, setError, logOut}} >{children} </AuthContext.Provider>;
};

export default AuthState;