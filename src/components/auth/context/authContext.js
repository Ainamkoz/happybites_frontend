import {createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthState = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    const [authError, setError] = useState('');
    const [allRestau, setAllRestau] = useState([]);
    const [singleRestau, setSingleRestau] = useState({});
    const [selectedRestau, setSelectedRestau] = useState([]);
    const [loading, setLoading] = useState(null);
    const [allIdeas, setAllIdeas] = useState([]);
    const [selectedIdea, setSelectedIdea] = useState([]);



    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/company')
          .then(res => res.json())
          .then(data => {
            setAllRestau(() => data);
            setSelectedRestau(() => data);
          })
          .catch(err => {
            console.log(`All Restaurants: ${err}`);
            setError(() => err);
          });
        setLoading(false);
      }, []);


      useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/ideas')
          .then(res => res.json())
          .then(data => {
            setAllIdeas(() => data);
            setSelectedIdea(() => data);
          })
          .catch(err => {
            console.log(`All Ideas: ${err}`);
            setError(() => err);
          });
        setLoading(false);
      }, []);


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

    return <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser, authError, setError, logOut, allRestau, 
        selectedRestau,
        setSelectedRestau, setAllIdeas, allIdeas, selectedIdea, setSelectedIdea,
        loading}} >{children} </AuthContext.Provider>;
};

export default AuthState;