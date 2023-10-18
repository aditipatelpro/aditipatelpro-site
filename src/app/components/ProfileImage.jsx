import Image from 'next/image'
import profilePic from '../../public/profile.PNG'

export default function ProfileImage() {
    return (
        <div>
            <Image
            src={profilePic}
            width={100}
            height={100}
            alt="My picture"
            className='rounded-full'
            />
      </div>
    )
}