import React from "react";
import { Button, Typography } from "@material-ui/core";
import { bakeCake, buyCakes } from "../redux/cakes/cakesAction";
import { connect } from "react-redux";
import { useEffect } from "react";

const CakeContainer = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      <Typography variant="h2">
        Number of Cakes: {props.numberOfCakes}
      </Typography>
      <Button
        variant="contained"
        onClick={props.buyCakes}
        disabled={props.numberOfCakes === 0}
      >
        Buy A Cake
      </Button>
      <Button variant="contained" onClick={props.bakeCakes}>
        Bake A Cake
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: () => dispatch(buyCakes()),
    bakeCakes: () => dispatch(bakeCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
