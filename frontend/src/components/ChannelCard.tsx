import { searchData } from "../types/types";
import CheckCircle from '@mui/icons-material/CheckCircle';
import { demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";

type ChannelCardProps = {
    channelDetail: searchData
    marginTop?: string
    maxWidth?: string
    disabled?: boolean
};

const ChannelCard = ({ channelDetail, marginTop, maxWidth, disabled }: ChannelCardProps) => {

    return (
        <div style={{ marginTop }}>
            {disabled ? (
                <div className="mx-auto" style={{ maxWidth }}>
                    <img
                        className="mx-auto"
                        src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                    />
                    <p className={`mt-3 flex items-center justify-center`}>
                        <span
                            className="flex items-center mt-1 text-second-darkblue-opc-70 text-[.9rem] md:text-[1.1rem]">
                            {channelDetail?.snippet?.title}
                        </span>
                        <CheckCircle sx={{ fontSize: { xs: 12, md: 18 }, color: 'gray', ml: '5px' }} />
                    </p>
                </div>
            ) : (
                <Link to={`../channel/${channelDetail?.id?.channelId}`}>
                    <img
                        style={{ maxWidth }}
                        className="mx-auto"
                        src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                    />
                    <p className={`mt-3 flex items-center justify-center`}>
                        <span
                            className="flex items-center mt-1 text-second-darkblue-opc-70 text-[.9rem] md:text-[1.1rem]">
                            {channelDetail?.snippet?.title}
                        </span>
                        <CheckCircle sx={{ fontSize: { xs: 12, md: 18 }, color: 'gray', ml: '5px' }} />
                    </p>
                </Link>
            )}
        </div>
    )
}

export default ChannelCard