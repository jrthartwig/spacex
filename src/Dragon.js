import React, { useState, useEffect } from 'react';

const Dragon = () => {
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/rockets/dragon').then(response => console.log(response))
    })

    return (
        <div styles={{ color: "#fff" }}>Dragon</div>
    )
}

export default Dragon;