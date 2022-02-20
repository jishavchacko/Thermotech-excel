import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const QuotationList = lazy(() => import("./containers/qotationList"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route exact path="/" element ={<QuotationList />} />
        
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
