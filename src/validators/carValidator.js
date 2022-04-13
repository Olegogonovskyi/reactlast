import Joi from "joi";

const carVal = Joi.object({
    model: Joi.string().min(1).max(40).require().message({
        'string.empty': 'Це поле не може бути пустим',
        'string.min': 'Це поле не може бути пустим',
        'string.max': 'Це поле не може бути пустим',

    }),
    price: Joi.number().min(1).max(10000000).require().message({
        'number.empty': 'Це поле не може бути пустим',
        'number.min': 'Це поле не може бути пустим',
        'number.max': 'Це поле не може бути пустим',

    }),
    year: Joi.number().min(1910).max(Date().getFullYear()).required()

    })

export {carVal}