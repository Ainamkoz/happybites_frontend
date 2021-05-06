import React, {useContext} from 'react';
import {AuthContext} from './context/authContext';
import CompanyInfo from './CompanyInfo'


const UserProfile = () => {
    const{userProfile} = useContext(AuthContext);

    if(userProfile.company){
       return  <CompanyInfo/>
    } else {
        return 'is user'
    }
}

export default UserProfile