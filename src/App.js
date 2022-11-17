import React,{useEffect} from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'; 
import Nav from './Routes/Nav/Nav';
import Home from './Routes/Home/Home';
import Admin from './Routes/Admin/Admin';
import { useDispatch } from 'react-redux';
import { fetchMenu } from './redux/menuSlice/menuSlice';


function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(fetchMenu());

  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
