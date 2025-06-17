import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Studio from "./pages/Studio";
import Chat from "./pages/chat";
import Stream from "./pages/stream";
//import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Stream />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/stream" element={<Stream />} />
      </Routes>
    </Router>
  );
}

export default App
