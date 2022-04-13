import React from 'react';

import {useForm} from "react-hook-form";
import {car_service} from "../../services"


const Carform = ({setnewcar}) => {
    const {register, handleSubmit, reset} = useForm()
    const submit = async (car) => {
        const {data} = await car_service.adNewcar(car);
        setnewcar(data)
    reset()

    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model<input type="text" {...register('model')}/></label></div>
            <div><label>Price<input type="text" {...register('price', {valueAsNumber:true})}/></label></div>
            <div><label>Year<input type="text" {...register('year', {valueAsNumber:true})}/></label></div>
            <button>Save</button>
        </form>
    );
};

export {Carform};