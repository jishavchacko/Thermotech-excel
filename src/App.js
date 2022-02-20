
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const Footer = lazy(() => import('./components/footerComponent'));
const QuotationList = lazy(() => import("./containers/qotationList"));
const Header = lazy (() => import("./components/headerComponent"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element ={<QuotationList />} />
          </Routes>
        </Router>
        <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
