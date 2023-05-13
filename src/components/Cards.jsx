import axios from 'axios'
import React, { useEffect, useState } from 'react'




function Cards({url}) {

console.log(url)

const [resi, setResi] = useState()

useEffect(() => {

  axios.get(url)
  .then(rese => setResi(rese.data))
  .catch(err => console.log(err))


}, [])




    return (
    <div className='relative  w-[300px] rounded-lg h-[450px] bg-[#0D7800] border-4 border-[#021905] shadow-[3px_2px_3px_2px_black] cursor-pointer hover:scale-105 hover:z-20 hover:border-[#F4FD03] duration-500'>
      
      <div className='absolute top-4 bg-[rgba(0,0,0,0.7)] border-[1px] border-[black] w-[130px] py-2 rounded-tr-3xl text-white flex justify-around'>
        <h1 className='text-[#edff47] font-extrabold'>{resi?.status}</h1>
        <div className={`${resi?.status === 'Alive' ? "bg-[#46f846] w-[22px] h-[22px] rounded-full" :"bg-[red] w-[22px] h-[22px]  rounded-full" } ${resi?.status === 'unknown' ? "bg-[#969696] w-[22px] h-[22px]" : " "}`} >
        
        </div>
      
      </div>
      
      <img className='rounded-t-lg'  src={resi?.image} />
      <h2 className='text-center  text-[#F4FD03] font-bold text-[20px] py-2'>{resi?.name}</h2>
      <h3 className='text-black font-extrabold mx-2 '>Specie: <span className=' text-[#F4FD03] font-extrabold mx-5'>{resi?.species} </span></h3>
      <h2 className='text-black font-extrabold mx-2 '>Origin: <span className=' text-[#F4FD03] font-extrabold mx-5'>{resi?.origin.name}</span></h2>
      <h2 className='text-black font-extrabold mx-2 '>episodios: <span className=' text-[#F4FD03] font-extrabold mx-5'>{resi?.episode.length}</span></h2>
    </div>
  )
}

export default Cards