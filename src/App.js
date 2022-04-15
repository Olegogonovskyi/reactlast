import {Routes, Route, Navigate} from "react-router-dom";
import {Mainlayout} from './Layout';
import {Users, Posts} from './Components'
import React from "react";

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Mainlayout/>}>
          <Route index element = {<Navigate to ={`users`}/>}/>
        <Route path={'users'} element={<Users/>}/>
        <Route path={'posts'} element={<Posts/>}/>



</Route>
    </Routes>
  );
}

export default App;
