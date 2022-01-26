import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Plants(props) {
const [plants, setPlants] = useState([]);

const getPlants = () => {
    axios.get('http://localhost:3000/plants')
    .then((res) => console.log(res));

}
useEffect(() => {
    getPlants()
}, [])

    return (
        <div>
            
        </div>
    );
}

export default Plants;