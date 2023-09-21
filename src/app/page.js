import Image from 'next/image'
import { AiFillFilePdf, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { BiLogoTypescript, BiLogoNodejs, BiLogoVuejs, BiLogoGraphql, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMui } from "react-icons/si";
import profilePic from '../../public/profile.PNG'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col gap-8 p-12 max-w-lg">
        <div>
          <Image
            src={profilePic}
            width={100}
            height={100}
            alt="My picture"
            className='rounded-full'
          />
        </div>
      
        <div className="flex flex-col gap-2 sm:gap-3">
          <h1 className='text-4xl sm:text-5xl font-semibold'>Hi, I am Aditi</h1>
          <p className='text-lg sm:text-xl'>I am a Full Stack Engineer and an open source contributor.</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className='text-lg'> Tech Stack</p>

          <div className='flex flex-wrap gap-2'>
            <FaReact size={'25'}/>
            <BiLogoTypescript size={'25'}/> 
            <TbBrandNextjs size={'25'}/>
            <BiLogoNodejs size={'25'}/>
            <BiLogoVuejs size={'25'} />
            <BiLogoGraphql size={'25'}/>
            <SiMui size={'25'}/>
            <BiLogoPostgresql size={'25'}/>
          </div>
        </div>

        <div className='flex flex-wrap gap-4'>
          <Link href='https://www.linkedin.com/in/aditipatelpro/'>
            <button className="bg-blue-500 text-gray-100 font-semibold px-4 py-2 rounded-md flex gap-1 items-center">              
              <AiFillLinkedin/> LinkedIn
            </button>
          </Link>

          <Link href='https://github.com/aditipatelpro'>
            <button className="bg-blue-500 text-gray-100 font-semibold px-4 py-2 rounded-md flex gap-1 items-center">
              <AiFillGithub/> Github
            </button>
          </Link>

          <a href="/resume.pdf" target='_blank'>
            <button className="bg-blue-500 text-gray-100 font-semibold px-4 py-2 rounded-md flex gap-1 items-center">      
              <AiFillFilePdf/> Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
