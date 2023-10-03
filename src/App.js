import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route,BrowserRouter,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =() => {

  const [progress, setProgress]=useState(0)

    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={progress}
            
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} key='general' pageSize={12} country='in' category='general' />}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} key='business' pageSize={12} country='in' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={12} country='in' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} key='health' pageSize={12} country='in' category='health' />}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} key='science' pageSize={12} country='in' category='science' />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={12} country='in' category='sports' />}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={12} country='in' category='technology' />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;
