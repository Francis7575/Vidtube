import { Link } from 'react-router-dom'
import youtubeIcon from '/assets/icon-youtube.png'
import { LogoProps } from '../types/types'

const Logo = ({isLogoVisible}: LogoProps) => {
    return (
        <div>
            {isLogoVisible && (
                <Link to="/" className='flex items-center'>
                    <img src={youtubeIcon} alt="Youtube logo" className='max-w-[2.2rem]' />
                    <p className={`text-[.9rem] font-medium ml-1 `}>
                        VidTube
                    </p>
                </Link>
            )}
        </div>
    )
}

export default Logo