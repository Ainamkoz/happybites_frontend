import React, {useContext} from 'react';
import {AuthContext} from './context/authContext';
import CompanyInfo from './CompanyInfo'
import NormalProfile from '../userSite/normalProfile';


const UserProfile = () => {
    const{userProfile} = useContext(AuthContext);

    if(userProfile.company){
       return  <CompanyInfo/>
    } else {
        return <NormalProfile/>
    }
}

export default UserProfile