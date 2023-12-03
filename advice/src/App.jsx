import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('')
  
  useEffect(() => {
   getAdvice();
  },[]);

  
  const getAdvice = async (e) => {
    await axios.get('https://api.adviceslip.com/advice').then(({ data }) => {   setAdvice(data.slip.advice); })
  }
  return (
    <>
      <main>
        {/*main div*/}
        <div className='flex items-center justify-center h-screen w-full p-[18px] text-center'>

          {/*card*/}
          <div className=' relative flex flex-col bg-cardcolor rounded-[10px] min-w-[200px] gap-4'>
            <div className='p-8 pb-2'>
              <p className=' mb-3 text-NeonGreen text-xs tracking-[5px]'>ADVICE #117</p>
              <div className='max-w-[300px] md:max-w-[400px]'>
                <p className='text-lightgrey font-bold text-2xl'>{advice}
                </p></div></div>

            <div className=' flex flex-row justify-center items-center p-2 mb-10'>
              <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g>
              </svg>
            </div>
            <div className='flex justify-center'>
            <button onClick={() => getAdvice()} className=' absolute rounded-full bg-NeonGreen p-4 bottom-[-25px] hover:shadow-lg hover:shadow-NeonGreen  '>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
            </button></div>


          </div>

        </div>
      </main>
    </>
  )
}

export default App;
