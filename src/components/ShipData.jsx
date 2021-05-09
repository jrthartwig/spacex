import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "25px",
        paddingBottom: "25px",
        paddingLeft: "25px",
        flexDirection: "column"
    },
})

const ShipData = (props) => {

    const classes = useStyles();

    const [shipData, setShipData] = useState();

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/rockets/${props.name}`)
            .then(response => response.json())
            .then(response => setShipData(response))
            .then(response => console.log(response))
    }, [shipData, props.name])

    return (
        <div>
            {
                shipData &&
                <div className={classes.container}>
                    <div>height: {shipData.height.meters} meters </div>
                    <div>weight: {shipData.mass.lb} lbs</div>
                    <div>engine name: {shipData.engines.type}</div>
                    <div>engine count: {shipData.engines.number}</div>
                </div>

            }
        </div>
    )
}

export default ShipData