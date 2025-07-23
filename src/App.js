import React from 'react';
import ListUser from './ListUser';
import DetailUser from './DetailUser';
import NotFound from './NotFound';
import UserList from './UserList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ListUser />} />
        <Route path='/konfirmasi/:id' element={<DetailUser />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )

}

export default App;
