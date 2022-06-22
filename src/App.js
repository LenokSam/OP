import React, { useEffect, useMemo } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import HomePage from './pages/HomePage';
import CalculationPage from './pages/CalculationPage';
import FloorConstruction from './pages/dataPages/FloorConstruction';
import {table1_18x2} from './modules/tables/tables1-9/table1'
import Header from './components/header/Header';


function App() {
  const dispatch = useDispatch();
  const initialData = useSelector((state) => state?.initialParametrs)
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Route path="/" exact component={HomePage} />
        <Route path="/calculation" exact component={CalculationPage} />
        {/* <Route path="/construction" exact component={FloorConstruction} /> */}

      </div>
    </BrowserRouter>

  );
}

export default App;
