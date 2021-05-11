import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    palette: {
            primary1Color: `#006064`,
            accent1Color: `#e57373`,
            accent3Color: `#bdbdbd`,
            accent2Color: `#e57373`,
            shadowColor: `#ffcdd2`,
            primary2Color: `#ff8a80`,
            primary3Color: `#bdbdbd`,
            secondaryTextColor: `#e57373`,
            pickerHeaderColor: `#e57373`,
            clockCircleColor: `#e0e0e0`
        },
    appBar: {
            color: `#006064`
        },
    navbarDisplayFlex: {
        display: `flex`,
        flexDirection:`row`,
        justifyContent: `space-between`
      },
      navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-around`
      },
      linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`
      },
      list: {
        width: 250
      },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0',
      },
    // Inspiration material UI Grid list with titlebars
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default useStyles;