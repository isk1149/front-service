import React from 'react';
import './App.css';
import { call } from './api/apiService';
import { AppBar, Toolbar, Container, Grid } from '@mui/material';
import HomeBoard from './component/HomeBoard';
import Home from './component/Home';
import Board from './component/Board';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Post } from './component/Post';

const App = () => {

  const onClickLogo = () => {
    window.location.href="/";
  }

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}  sx={{ borderBottom: 1, borderColor: 'grey.300' }}>
        {/*elevation={0} : 그림자 제거*/}
        <Toolbar>
            <img src="/react.png" alt="Logo" style={{ height: '50px', cursor: 'pointer' }} onClick={()=>onClickLogo()} />
        </Toolbar>
      </AppBar>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/boards/:boardId" element={<Board/>}/>
            <Route path="/posts/:postId" element={<Post/>}/>
          </Routes>
      </Router>
    </>
  );
};

export default App;
