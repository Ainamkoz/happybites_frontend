import Company from './company';
import Homeimg from './assets/img/Homeimg.svg'
import {Grid} from "@material-ui/core";



const Collaborators  = ()=>{
    return(
        <>
        <Grid item xs={12} md={3}>
           <img src={Homeimg} alt="home-img-cheers" style={{width:"48rem"}} />
        </Grid>
        <Company/>
        </>
    )
}

export default Collaborators;