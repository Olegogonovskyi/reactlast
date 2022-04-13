import React, {useState} from 'react';

import {useForm} from "react-hook-form";
import {car_service} from "../../services"


const Carform = ({setnewcar}) => {
    const {register, handleSubmit, reset} = useForm()
    const {errortxt, seterrortxt} = useState();
    const submit = async (car) => {
        try {
            const {data} = await car_service.adNewcar(car);
            setnewcar(data)
            reset()
        }catch (e) {
            seterrortxt(e.response.data)
        }

    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model<input type="text" {...register('model)}/></label></div>
            {errortxt.model && <span>{errortxt.model[0]}</span>}
            <div><label>Price<input type="text" {...register('price', {valueAsNumber:true})}/></label></div>
            {errortxt.price && <span>{errortxt.price[0]}</span>}
            <div><label>Year<input type="text" {...register('year', {valueAsNumber:true})}/></label></div>
            {errortxt.year && <span>{errortxt.year[0]}</span>}
            <button>Save</button>
        </form>
    );
};

export {Carform};