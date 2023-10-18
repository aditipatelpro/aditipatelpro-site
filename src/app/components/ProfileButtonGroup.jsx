import { AiFillFilePdf, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';

export default function ProfileButtonGroup() {
    return (
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
    )
}