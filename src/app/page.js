import Image from 'next/image'
import Navbar from './Components/Navbar'

export default function Home() {
  return (
    <div className="">
      <div className='w-screen'>
        <Navbar />
      </div>
      
      <div className='bg-cyan-500 h-[90%]'>
        hello
      </div>
    </div>
    
  )
}
