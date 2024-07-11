import { Link } from 'react-router-dom'
import youtubeIcon from '/assets/icon-youtube.png'

const Logo = () => {
    return (
        <div>
            <Link to="/Vidtube" className='flex items-center'>
                <img src={youtubeIcon} alt="Youtube logo" className='540:w-[2.2rem] w-[28px]' />
                <p className={`font-medium ml-1 text-[.9rem] 540:text-[1rem]`}>
                    VidTube
                </p>
            </Link>
        </div>
    )
}

export default Logo