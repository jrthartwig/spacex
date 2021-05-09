import React from 'react';
import useStyles from './ship-title-styles';

const ShipTitle = (props) => {
    const classes = useStyles();

    return (<h1 className={classes.title}>{props.name}</h1>)
}

export default ShipTitle;