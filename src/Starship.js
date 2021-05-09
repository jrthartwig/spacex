import React, { useState, useEffect } from 'react';

const Starship = () => {
    const [starshipData, setStarshipData] = useState();

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/rockets/starship')
            .then(response => response.json())
            .then(response => setStarshipData(response))
    }, []);

    useEffect(() => {
        starshipData &&
            console.log(starshipData)
    }, []);

    return (
        <div>

            <div styles={{ color: "#fff" }}>Starship</div>
            {
                starshipData &&
                <>
                    <div>height: {starshipData.height.meters} meters </div>
                    <div>weight: {starshipData.mass.lb} lbs</div>
                    <div>engine name: {starshipData.engines.type}</div>
                    <div>engine count: {starshipData.engines.number}</div>

                </>
            }
        </div>
    )
}

export default Starship;