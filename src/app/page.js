import Image from 'next/image'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import QuestionWheel from './Components/QuestionWheel'

export default function Home() {
  return (
    <div className="bg-[#010c34] min-h-[100vh]">
      <div className='w-screen overflow-auto h-[20%]'>
        <Navbar />
        <div className='w-[100%] h-[100%] flex justify-around'>
          {/* sidebar */}
          <div className='w-[25%] h-[100%]' >
            <Sidebar />
          </div>
          <div className='w-[70%] max-h-[100%]'>

            <div className='max-h-[90%] m-2'>
              <QuestionWheel />
            </div>
            
          </div>
          
        </div>
        {/* <div className='h-'>
          Hello
        </div> */}
      </div>
    </div>
    
  )
}
