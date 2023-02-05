import React,{useEffect,useState} from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'; 
import Nav from './Routes/Nav/Nav';
import Home from './Routes/Home/Home';
import Admin from './Routes/Admin/Admin';
import { useDispatch } from 'react-redux';
import { fetchMenu } from './redux/menuSlice/menuSlice';
import CheckOut from './Routes/CheckOut/CheckOut';
import  Modal  from './Components/Modal/Modal';
//import { tableSelector } from './redux/tableSlice/tableSelector';

function App() {
  const dispatch=useDispatch();
  const [isOpen,setIsOpen] = useState(false)
 // const tableNo =useSelector(tableSelector);
  
  useEffect(() => {
    dispatch(fetchMenu()); 
  }, [])
  useEffect(()=>{
    // alert('This is a demo App, please enter table number(eg:2) and then add items to the bucket and check out. Then goto the footer and click on "Admin Console" to go to the admin panel')
   // if(!tableNo){
   // setIsOpen(true)}
  },[])
  return (
    <div className = "w-full bg-[#495E57]" >
      
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index element={<Home/>}/>
          <Route path='checkout' element={<CheckOut/>}/>
        </Route>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      <Modal className=' ' isOpen={isOpen} set={setIsOpen}/>
    </div>
  );
}

export default App;
