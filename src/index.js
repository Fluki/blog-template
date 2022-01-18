//TODO srediti import da vuce iz jednog fajla
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import Home from './pages/Home';
import Header from './components/Header';
import SinglePostPage from './pages/SinglePostPage';
import Create from './pages/Create.js';
import DeletePage from './pages/DeletePage';
import UpdatePage from './pages/UpdatePage.js';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blogs" element={<Posts />} />
        <Route path="/blogs/:id" element={<SinglePostPage />} />
        <Route path="/blogs/create" element={<Create />} />
        <Route path="/admin/delete" element={<DeletePage />} />
        <Route path="/admin/update/:id" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
