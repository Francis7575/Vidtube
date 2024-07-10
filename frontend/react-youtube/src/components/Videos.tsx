import { searchData } from "../types/types";
import { VideoCard, ChannelCard } from './';

type VideosProps = {
	videos: searchData[];
}

const Videos = ({ videos }: VideosProps) => {
	console.log(videos);
	// Add a check to ensure videos is defined and is an array
	if (!Array.isArray(videos)) {
		return <div className="pl-4">No videos available</div>;
	}
	
	// Separate channel and video items
	const channelItem = videos.find(item => item.id.channelId);
	const videoItems = videos.filter(item => item.id.videoId);

	return (
		<div className="px-4 gap-4 grid grid-cols-dynamic">
			{channelItem && (
				<div className="mb-5">
					<ChannelCard channelDetail={channelItem} />
				</div>
			)}
			{videoItems.map((item, idx) => (
				<div key={idx} className="mb-5">
					<VideoCard video={item} />
				</div>
			))}
		</div>
	);
}

export default Videos;
