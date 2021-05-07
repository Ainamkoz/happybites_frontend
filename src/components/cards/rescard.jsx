import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useState, useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { AuthContext } from "../auth/context/authContext";
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(Theme => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
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
        <div>
          <Card className={classes.root}>
            {item && (
              <CardMedia
                component="img"
                alt="Codo restaurant"
                className={classes.cover}
                image={item.images}
                title="Codo restaurant"
              />
            )}
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {item.service_name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
              <div>
                <Rating
                  name="half-rating"
                  defaultValue={item.rating}
                  precision={0.5}
                />
                <Link to={`/plan-your-event/${item.service_id}`}>
                <Button>Book!</Button>
             </Link> 
              </div>
            </div>
          </Card>
         
        </div>
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
