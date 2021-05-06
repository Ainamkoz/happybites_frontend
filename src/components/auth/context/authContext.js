import {createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthState = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userProfile, setUserProfile] = useState()
    const [user, setUser] = useState({});
    const [authError, setError] = useState('');
    const [allRestau, setAllRestau] = useState([]);
    const [searchService, setsearchService] = useState("");
    const [singleRestau, setSingleRestau] = useState("");
    const [userInput, setUserInput] = useState("");
    const [selectedRestau, setSelectedRestau] = useState([]);
    const [loading, setLoading] = useState(null);
    const [allIdeas, setAllIdeas] = useState([]);
    const [selectedIdea, setSelectedIdea] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/services')
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
    
      const signUp = async (options)=>{
        try{
          const res = await fetch(`${process.env.REACT_APP_BACKEND}/signup`, options);
          const data = await res.json();
          if(data.error) return setError (data.error); // check this part this Jorge
          localStorage.setItem('token', data.token);
          const resUserProfile =  await fetch(`${process.env.REACT_APP_BACKEND}/userprofile/getcurrentuser`, {headers: {token: data.token}});
          const userProfile = await resUserProfile.json()
          setUserProfile(userProfile)
          setIsAuthenticated(true);
          } catch (error) {
            console.log(error);
          }
      }

      const signIn = async (options)=>{
        try{
          const res = await fetch(`${process.env.REACT_APP_BACKEND}/signin`, options);
          const data = await res.json();
          if(data.error) return setError (data.error); 
          localStorage.setItem('token', data.token); 
          const resUserProfile =  await fetch(`${process.env.REACT_APP_BACKEND}/userprofile/getcurrentuser`, {headers: {token: data.token}});
          const userProfile = await resUserProfile.json()
          setUserProfile(userProfile)
          setIsAuthenticated(true);
          } catch (error) {
            console.log(error);
          }
      }


      
      

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
              const resUserProfile =  await fetch(`${process.env.REACT_APP_BACKEND}/userprofile/getcurrentuser`, {headers: {token: token}});
              const userProfile = await resUserProfile.json()
              console.log(userProfile)
                setUserProfile(userProfile)
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

    return <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser, userProfile, authError, setError, signUp,signIn, logOut, allRestau, 
        selectedRestau,
        setSelectedRestau, setAllIdeas, allIdeas, selectedIdea, setSelectedIdea,loading}} >{children} </AuthContext.Provider>;
};

export default AuthState;