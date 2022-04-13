import React from 'react';
import {useForm} from "react-hook-form";


const Carform = () => {
    const {register, handleSubmit, reset} = useForm()
    const submit = (data) => {
    console.log(data)
        reset()
    }
    return (
        <div onClick={handleSubmit(submit)}>
            <div><label>Model<input type="text" {...register('model')}/></label></div>
            <div><label>Price<input type="text" {...register('price', {valueAsNumber:true})}/></label></div>
            <div><label>Year<input type="text" {...register('year', {valueAsNumber:true})}/></label></div>
            <button>Save</button>
        </div>
    );
};

export {Carform};