import ProfileButtonGroup from './components/ProfileButtonGroup';
import TechStackGroup from './components/TechStackGroup';
import ProfileImage from './components/ProfileImage';

export default function Home() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col gap-8 p-12 max-w-lg">
        <ProfileImage/>

        <div className="flex flex-col gap-2 sm:gap-3">
          <h1 className='text-4xl sm:text-5xl font-semibold'>Hi, I am Aditi</h1>
          <p className='text-lg sm:text-xl'>I am a Full Stack Engineer and an open source contributor.</p>
        </div>

        <TechStackGroup/>
        
        <ProfileButtonGroup/>
      </div>
    </div>
  )
}
