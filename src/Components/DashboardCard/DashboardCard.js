import  React from 'react';

const DashboardCard =({item,setC,count})=>{
    //const {name,id} = item;
    return (
    <div className='p-4  '>
      <div  
          className='relative mx-5 w-[8rem] h-[5rem] bg-slate-500 flex flex-col justify-center items-center rounded-xl drop-shadow-lg p-2 cursor-pointer'
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