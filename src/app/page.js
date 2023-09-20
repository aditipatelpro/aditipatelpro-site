import Image from 'next/image'
import { FaReact } from 'react-icons/fa';
import { BiLogoTypescript, BiLogoNodejs, BiLogoVuejs, BiLogoGraphql, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMui } from "react-icons/si";
import profilePic from '../../public/profile.jpeg'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-wrap h-screen w-screen bg-slate-100 justify-center items-center min-w-300 gap-4 p-12">
      <div>
        <Image
            src={profilePic}
            width={200}
            height={200}
            alt="My picture"
            className='rounded-full'
          />
      </div>

      <div className='block space-y-6'>
        <div className='flex flex-col  h-200 gap-2'>
          <h1 className='text-4xl sm:text-5xl font-semibold'>Hi, I am Aditi Patel</h1>
          <p className='text-l'>I am a Full Stack Engineer. I am an active open source contributor and I am in love with react !!!</p>
        </div>

        <div>
          <p className='text-3xl'> Tech Stacks I love to work with</p>
          <div className='flex flex-wrap gap-4'>
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
              <button className="bg-blue-300 text-gray-800 font-semibold px-5 py-2.5 rounded inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current w-4 h-3.5 mr-2" 
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                    LinkedIn
              </button>
            </Link>

            <Link href='https://github.com/aditipatelpro'>
              <button className="bg-blue-300 text-gray-800 font-semibold px-5 py-2.5 rounded inline-flex items-center">
                  <svg 
                    className="fill-current w-4 h-4 mr-2" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                  </svg>
                    Github
              </button>
            </Link>

          <a href="/resume.pdf" target='_blank'>
            <button className="bg-blue-300 text-gray-800 font-semibold px-5 py-2.5 rounded inline-flex items-center">
              <svg 
                  className="w-4 h-4 mr-2" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24">
                    <path stroke="black" strokeLinejoin="round" strokeWidth="2" d="M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"/>
                </svg>
                Resume
            </button>
          </a>
        </div>
      </div>

    </div>
  )
}