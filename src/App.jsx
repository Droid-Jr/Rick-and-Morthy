import { useEffect, useState } from 'react'
import axios from 'axios';
import Location from './components/Location';
import Cards from './components/Cards';
import ErrorBusqueda from './components/ErrorBusqueda';
import Cabezal from './components/Cabezal';
import Footers from './components/Footers';

function App() {
 
const [location, setLocation] = useState()

const [inputsT, setInputsT] = useState()
const [Errores, setErrores] = useState(false)



useEffect(() => {
  
  let URL
  
  if(inputsT){
    URL = `https://rickandmortyapi.com/api/location/${inputsT}`;
  } else{
    const randon = Math.floor(Math.random() * 126) + 1
       URL = `https://rickandmortyapi.com/api/location/${randon}`;
  }
  
  
  
  
  
  axios.get(URL)
  .then(res => {setLocation(res.data)
    setErrores(false)})
  .catch(err => {setErrores(true)})
}, [inputsT])


const handleSubmit = e =>{
  e.preventDefault()
setInputsT(e.target.inputSerch.value)
}




  return (
     
    <div>
     <Cabezal/>
    <div className='bg-[rgb(113,255,97)]'>

    <form className='w-screen h-[80px] flex justify-center items-center bg-[#0D7800]'  onSubmit={handleSubmit}>
      <input className='outline-none px-[10%]  py-2 rounded-lg' placeholder='Colocar Id o numero' id='inputSerch' type="text" />
      <button className='bg-[#F4FD03] border-2 border-black font-extrabold py-2 px-5 rounded-lg'>Search</button>
    </form>
    </div>
   {
    Errores ? <ErrorBusqueda/> :<>
     <Location local={location} />
    <div className='contein-card flex flex-wrap justify-center items-center py-4 w-screen  gap-4 bg-[#0D7800] 'key={location?.created} >
      {
        location?.residents.map(url => <Cards  url={url}/>)
      }
    </div>
    </>
   }
   <Footers/>
    </div>
  )}
  


export default App
