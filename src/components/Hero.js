import React from 'react'
import Image from 'next/image'
import imagebase from "/public/img/layerbase.png"
import imagemiddle from "/public/img/layermiddle.png"
import imagefront from "/public/img/layerfront.png"


function Hero() {
  return (
    <div className="relative w-screen h-screen z-0">
      {/* Background Image */}
      <Image
        src={imagebase}
        layout="fill" // Use layout="fill" to make the Image cover the parent div
        objectFit="cover" // Adjust objectFit to control how the image scales
        priority={true}
        alt="Picture of the author"
      />

      <div className="w-[100%] h-[100%] flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-8xl text-white z-20">
        <Image
          src={imagemiddle}
          layout="fill" // Use layout="fill" to make the Image cover the parent div
          objectFit="cover" // Adjust objectFit to control how the image scales
          priority={true}
          alt="Picture of the author"
        />
      </div>

      <div className="w-[100%] h-[100%] flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-8xl text-white z-30">
        <Image
          src={imagefront}
          layout="fill" // Use layout="fill" to make the Image cover the parent div
          objectFit="cover" // Adjust objectFit to control how the image scales
          priority={true}
          alt="Picture of the author"
        />
      </div>

      {/* Text */}
      <div className="w-[60%] flex-col absolute top-[36%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-8xl text-white z-10">
        
      
        <div className='text-6xl  text-[#faf3e1] hover:animate-glow'>
          ISA-VIT
          {/* hover:animate-glow hover:rounded-3xl hover:bg-[#ff741e] hover:bg-opacity-50 duration-1000  */}
        </div>
        <div className='p-10 text-8xl text-[#faf3e1]'>
          BINARY BATTLES
        </div>

      </div>
      
    </div>
  );
}

export default Hero