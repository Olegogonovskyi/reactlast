import {useContext} from 'react';
import css from './Aboutpage.module.css'
import {MyContext} from '../../index'

const About = () => {
    const value = useContext(MyContext);
    console.log(value)
    return (
        <div className={css.warp}>
            <div>То сайтик на якому Олько вчиться з javascript працювати, гортайте далі</div>
            <div>Щиро ваш, Олько</div>
        </div>
    );
};

export {About};