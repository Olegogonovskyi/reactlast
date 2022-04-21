import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from './mainlayout.module.css'

const Mainlayout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about_page" >About</NavLink>
            </div>
            <hr/>
            <Outlet/>
            
        </div>
    );
};

export {Mainlayout};