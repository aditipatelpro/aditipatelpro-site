import { FaReact } from 'react-icons/fa';
import { BiLogoTypescript, BiLogoNodejs, BiLogoVuejs, BiLogoGraphql, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMui } from "react-icons/si";

export default function TechStackGroup() {
    return (
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
    )
}