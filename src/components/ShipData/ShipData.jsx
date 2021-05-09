import React, { useEffect, useState } from 'react';
import useStyles from './ship-data-styles';

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

export default ShipData;