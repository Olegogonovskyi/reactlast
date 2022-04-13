import {useState, useEffect} from 'react';

import {car_service} from '../../services'
import {Car} from '../car/car'


const Cars = ({newcar}) => {
    const [cars, setcars] = useState([]);
    useEffect(() => {
        car_service.getAll().then(({data})=> setcars(data))
    }, [])

    useEffect(()=> {
        if (newcar){
            setcars([...cars, newcar])
        }
    }, [newcar])
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}

        </div>
    );
};

export {Cars};