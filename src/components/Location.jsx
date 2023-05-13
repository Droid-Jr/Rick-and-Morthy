import React from 'react'




function Location({local}) {





    return (
    <div className=' w-screen h-[150px] bg-[#0D7800] flex'>
     <div className='w-[90%] h-[80%] border-2 border-[black] rounded-xl m-auto overflow-hidden bg-[rgba(0,0,0,0.5)] text-white font-extrabold'>

      <h2 className='py-4 text-center font-extrabold text-[#F4FD03] text-[23px]'>{local?.name}</h2>

      
      <div className='flex justify-around '>
       

        <h4 className='text-black'>Type: <span className='text-[#F4FD03] mx-2'>{local?.type}</span></h4>
       
        
        <h4 className='text-black'>Dimension: <span className='text-[#F4FD03] mx-2'>{local?.dimension}</span></h4>

        
        <h5 className='text-black'>Populesion: <span className='text-[#F4FD03] mx-2'>{local?.residents.length}</span></h5>
        
     </div>

      
      </div>
    </div>
  )
}

export default Location