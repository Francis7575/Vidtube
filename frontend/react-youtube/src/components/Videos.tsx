import { searchData } from "../types/types";
import { VideoCard, ChannelCard } from './';

type Videosprops = {
	videos: searchData[];
}

const Videos = ({ videos }: Videosprops) => {
	console.log(videos);

	// Add a check to ensure videos is defined and is an array
	if (!Array.isArray(videos)) {
		return <div className="pl-4">No videos available</div>;
	}

	return (
		<div className="px-4 gap-4 grid grid-cols-dynamic">
			{videos.map((item, idx) => {
				if (item.id.videoId) {
					return (
						<div key={idx} className="mb-5">
							<VideoCard video={item} />
						</div>
					);
				} else if (item.id.channelId) {
					return (
						<div key={idx} className="mb-5">
							<ChannelCard channelDetail={item} />
						</div>
					);
				}
				return null; // Skip rendering if neither videoId not channelId exists
			})}
		</div>
	);
}

export default Videos;
