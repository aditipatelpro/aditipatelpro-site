import Image from 'next/image'
import { FaReact } from 'react-icons/fa';
import { BiLogoTypescript, BiLogoNodejs, BiLogoVuejs, BiLogoGraphql, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMui } from "react-icons/si";
import profilePic from '../../public/profile-picture.jpeg'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <div className='flex items-center space-x-4'>
      <Image
        src={profilePic}
        width={150}
        height={150}
        alt="My picture"
        className='rounded-full'
        />
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-semibold'>Hi, I am Aditi Patel</h1>
          <p className='text-xl'>I am a Full Stack Engineer and I am in love with react.</p>
        </div>
      </div>
      <div>
        <p> Tech Stacks I love to work with</p>
        <div className='flex'>
          <FaReact/>
          <BiLogoTypescript/> 
          <TbBrandNextjs/>
          <BiLogoNodejs/>
          <BiLogoVuejs/>
          <BiLogoGraphql/>
          <SiMui/>
          <BiLogoPostgresql/>
        </div>
      </div>
      <div className='flex space-x-4'>
        <button>LinkdIn</button>
        <button>Github</button>
        <button class="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Download</span>
        </button>
      </div>

    </div>
  )
}
