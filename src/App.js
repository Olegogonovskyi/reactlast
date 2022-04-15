import {Routes, Route, Navigate} from "react-router-dom";
import {Mainlayout} from './Layout';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Mainlayout/>}/>


    </Routes>
  );
}

export default App;
