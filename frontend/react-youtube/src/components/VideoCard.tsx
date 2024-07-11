import { searchData } from "../types/types";
import { Link } from 'react-router-dom'
import CheckCircle from '@mui/icons-material/CheckCircle';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

type VideoCardProps = {
    video: searchData
};

const VideoCard = ({ video: { id: { videoId }, snippet } }: VideoCardProps) => {
    console.log(videoId, snippet)
    return (
        <section className="w-full hover:opacity-70 h-full shadow-lg bg-white max-w-[450px] mx-auto">
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <img className="w-full h-[220px]"
                    src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title} />
            </Link>
            <div className="px-3  h-full pt-2 pb-4">
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <p className="text-second-darkblue font-bold">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </p>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <span className="flex items-center mt-1 text-second-darkblue-opc-70">
                        <span className="text-[.9rem]">{snippet?.channelTitle || demoChannelTitle}</span>
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </span>
                </Link>
            </div>
        </section>
    )
}

export default VideoCard