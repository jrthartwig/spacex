import React, { useState, useEffect } from 'react';

const Falcon9 = () => {
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/rockets/starship').then(response => console.log(response))
    })

    return (
        <div styles={{ color: "#fff" }}>Falcon 9</div>
    )
}

export default Falcon9;