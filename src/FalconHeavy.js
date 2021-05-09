import React, { useState, useEffect } from 'react';

const FalconHeavy = () => {
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/rockets/starship').then(response => console.log(response))
    })

    return (
        <div styles={{ color: "#fff" }}>Falcon Heavy</div>
    )
}

export default FalconHeavy;