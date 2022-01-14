import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import Home from './components/Home';
import Header from './components/Header'
import SinglePostPage from "./components/SinglePostPage";
import Create from "./components/Create.js";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blogs" element={<Posts />} />
        <Route path="/blogs/:id" element={<SinglePostPage />} />
        <Route path="/blogs/create" element={<Create />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
