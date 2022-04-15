import {Routes, Route, Navigate} from "react-router-dom";
import {Mainlayout} from './Layout';
import {Users, Posts} from './Components'

const App = () => {
  return (
    <Routes path={'/'} element={<Mainlayout/>}>
      <Route path={'Users'} element={<Users/>}/>
        <Route path={'Posts'} element={<Posts/>}/>



    </Routes>
  );
}

export default App;
