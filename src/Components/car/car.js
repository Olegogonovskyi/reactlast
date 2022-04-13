import React from 'react';
import {car_service} from '../../services'

const Car = ({car}, setupdcar) => {
    const {id, model, price, year} = car;
    const uplcar =  ()=> {
         const {data} = car_service.updNewcar(id)
        setupdcar(data)
    }
    const delcar = async ()=> {
        await car_service.delNewcar(id)
    }
    return (
        <div>
            <div>id: {id} </div>
            <div>model: {model} </div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=> delcar()}>Dtl</button>
            <button onClick={()=> uplcar()}>UPD</button>
            <br/>

        </div>
    );
};

export {Car};