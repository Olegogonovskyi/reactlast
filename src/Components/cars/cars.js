import {useState, useEffect} from 'react';

import {car_service} from '../../services'
import {Car} from '../car/car'


const Cars = () => {
    const [cars, setcars] = useState([]);
    useEffect(() => {
        car_service.getAll().then(({data})=> setcars(data))

    }, [])
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}

        </div>
    );
};

export {Cars};