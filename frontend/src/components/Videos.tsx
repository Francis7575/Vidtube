import { searchData } from "../types/types";
import { VideoCard, ChannelCard } from './';

type VideosProps = {
	videos: searchData[];
	className: string
}

const Videos = ({ videos, className }: VideosProps) => {
	if (!Array.isArray(videos)) {
		return <div className="pl-4">No videos available</div>;
	}

	// Separate channel and video items
	const channelItem = videos.find(item => item.id.channelId);
	const videoItems = videos.filter(item => item.id.videoId);
	const filteredVideoItems = videoItems.filter((_, index) => index !== 2);
	return (
		<div className={`px-4 gap-4 grid ${className}`}>
			{channelItem && (
				<div className="mb-5">
					<ChannelCard channelDetail={channelItem} />
				</div>
			)}
			{filteredVideoItems.map((item) => (
				<div key={item.id.videoId} className="mb-5">
					<VideoCard video={item} />
				</div>
			))}
		</div>
	);
}

export default Videos;
