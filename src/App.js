import {useState} from 'react';

import {Carform, Cars} from './Components';




const App = () => {

    const [newcar, setnewcar] = useState(null);
  return (
    <div>
        <Carform setnewcar={setnewcar}/>
        <hr/>
        <Cars newcar={newcar} />

    </div>
  );
};

export default App;
