import  React from 'react';

const DashboardCard =({item,setC,count})=>{
    //const {name,id} = item;
    return (
    <div className = 'p-4 w-full md:w-[14rem] ' >
      <div  
          className = 'relative h-[5rem] mx-5 bg-slate-500 flex flex-col justify-center items-center rounded-xl drop-shadow-lg p-2 cursor-pointer'
          onClick={()=>setC(item.id)}>
          <p className='text-white'>{item.name.toUpperCase()}</p>
          <>
            {
              count === item.id? 
                (<div  className = 'absolute w-full h-2 bottom-0 rounded-b-xl z-10 bg-red-400' / >)
                :
                null
            }
          </>
      </div> 
    </div>
    )
};
export default DashboardCard