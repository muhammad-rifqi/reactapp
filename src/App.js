import React from 'react';
import ListUser from './ListUser';
import DetailUser from './DetailUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ListUser />} />
        <Route path='/konfirmasi/:id' element={<DetailUser />} />
      </Routes>
    </Router>
  )

}

export default App;
