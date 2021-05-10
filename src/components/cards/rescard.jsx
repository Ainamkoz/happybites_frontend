import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useState, useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, CardActions } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { AuthContext } from "../auth/context/authContext";
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(Theme => ({
  root: {
    display: "flex",
    marginBottom:"1rem",
  },
  CardCompanies: {
    paddingTop: '0',
  },
  titleCard: {
    fontSize: '1.2rem',
    fontWeight:'500',
    color: '#2c2c3d',
  },
  descriptionCard:{
    color: '#2c2c3d',
  },
  details: {
    paddingLeft:"2rem",
    paddingRight:"2rem",
    display: "flex",
    paddingTop:"0",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: { 
    width: '15rem',
  },
}));

const Rescard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { selectedRestau, loading } = useContext(
    AuthContext
  );

  // React pagination
  const [pageNum, setPageNum] = useState(0);
  const cardsPerPage = 6;
  const pagesVisited = pageNum * cardsPerPage;

  const displayCards = selectedRestau
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map(item => {
      return (
        <Container className={classes.CardCompanies} style={{ padding:'0'}}>
          <Card className={classes.root}>
            {item && (
              <CardMedia
                component="img"
                alt="Codo restaurant"
                className={classes.cover}
                image={item.images} // replace later {`http://localhost:5000/uploads/${item.images}`}
                title="Codo restaurant"
              />
            )}
            <Container className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5" className={classes.titleCard}>
                  {item.service_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.descriptionCard}>
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions style={{justifyContent:"space-between"}}>
              <Rating
                  name="half-rating"
                  defaultValue={item.rating}
                  precision={0.5}
                />
                <Link to={`/plan-your-event/${item.service_id}`} style={{textDecoration:'none'}}>
                <Button align="right" variant="outlined">Book!</Button>
             </Link> 
              </CardActions>
                

            </Container>
          </Card>
         
        </Container>
      );
    });
  const pageCount = Math.ceil(selectedRestau.length / cardsPerPage);
  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  if (loading) return <div> Loading... </div>;

  return (
    <div className="container mt-5">
      <div className="row">
        {displayCards}
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Rescard;
