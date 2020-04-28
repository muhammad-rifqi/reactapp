import React from 'react';
import ListUser from './ListUser';
import DetailUser from './DetailUser';
import {BrowserRouter, Route} from 'react-router-dom';

const App = ()=>{
  return (
    <BrowserRouter>
    <div>
    <Route exact path='/' component={ListUser} />
    <Route path='/detail/:id_user' component={DetailUser} />
    </div>
    </BrowserRouter>
  )

}

export default App;
