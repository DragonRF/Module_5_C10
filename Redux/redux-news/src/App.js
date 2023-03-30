import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import StoryList from './components/StoryList';

const App = () => {
  return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/:type" element={<StoryList/>} />
            <Route index element={<Navigate to="/top" />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
};

export default App;