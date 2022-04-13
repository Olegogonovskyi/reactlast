import React, {useState} from 'react';

import {useForm} from "react-hook-form";
import {car_service} from "../../services"
import {joiResolver} from "@hookform/resolvers/joi"
import {carVal} from '../../validators'


const Carform = ({setnewcar}) => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm({resolver:joiResolver(carVal)});
    // const {errortxt, seterrortxt} = useState({});

    const submit = async (car) => {
        try {
            const {data} = await car_service.adNewcar(car);
            setnewcar(data)
            reset()
        } catch (e) {
            // seterrortxt(e.response.data)
        }

    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model<input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{errortxt.model && <span>{errortxt.model[0]}</span>}*/}
            <div><label>Price<input type="text" {...register('price', {valueAsNumber:true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/*{errortxt.price && <span>{errortxt.price[0]}</span>}*/}
            <div><label>Year<input type="text" {...register('year', {valueAsNumber:true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/*{errortxt.year && <span>{errortxt.year[0]}</span>}*/}
            <button>Save</button>
        </form>
    );
};

export {Carform};