import React from 'react'
import Image from 'next/image'
import imagebase from "/public/img/layerbase.png"
import imagemiddle from "/public/img/layermiddle.png"
import imagefront from "/public/img/layerfront.png"


function Hero() {
  return (
    <div className="relative w-screen h-screen">
      {/* Background Image */}
      <Image
        src={imagebase}
        layout="fill" // Use layout="fill" to make the Image cover the parent div
        objectFit="cover" // Adjust objectFit to control how the image scales
        priority={true}
        alt="Picture of the author"
      />


      {/* Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-8xl text-white z-10">
        <div className='bg-cyan-500 p-10'>
          Hello
        </div>
        <div className='bg-cyan-500 p-10'>
          Hello
        </div>

      </div>
      
    </div>
  );
}

export default Hero