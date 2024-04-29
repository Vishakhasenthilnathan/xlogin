import './App.css';
import React from 'react';
import {Route, Routes} from "react-router";
import Login from "./Login";
import MainPage from "./MainPage";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </>
  );
}

export default App;
