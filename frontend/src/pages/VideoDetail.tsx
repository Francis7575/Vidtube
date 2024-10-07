import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import CheckCircle from '@mui/icons-material/CheckCircle';
import { Navbar, Videos } from '../components'
import { fetchApi } from '../utils/fetchApi';
import { searchData } from '../types/types';

const VideoDetail = () => {
	const [videoDetail, setVideoDetail] = useState<searchData | null>(null)
	const [videos, setVideos] = useState<searchData[]>([])
	const { id } = useParams()

	useEffect(() => {
		fetchApi(`videos?part=snippet,statistics&id=${id}`)
			.then((data) => setVideoDetail(data.items[0]))

		fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
			.then((data) => setVideos(data.items))
	}, [id])

	if (!videoDetail?.snippet) return null;

	const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

	return (
		<>
			<Navbar />
			<section>
				<div className='900:flex 900:gap-6 mt-[3.9rem] lg:mt-[3.75rem]'>
					<div className='900:flex-2 w-full 900:pl-8'>
						<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
						<div className='pl-4 mt-3 mb-7'>
							<h2 className='text-[1.15rem] lg:text-[1.4rem] font-bold'>
								{title}
							</h2>
							<div className='flex items-center 413:justify-between mt-4'>
								<Link to={`/channel/${channelId}`} className='flex items-center'>
									<p className='text-[1.1rem] lg:text-[1.2rem]'>
										{channelTitle}
									</p>
									<CheckCircle sx={{ fontSize: { xs: 12, md: 18 }, color: 'gray', ml: '5px' }} />
								</Link>
								<div className='flex items-center ml-2 413:gap-4 lg:gap-12 pr-4 900:pr-0 lg:text-[1.2rem]'>
									<p>{parseInt(viewCount).toLocaleString()} views</p>
									<p>{parseInt(likeCount).toLocaleString()} likes</p>
								</div>
							</div>
						</div>
					</div>
					<div className='900:pr-8 px-4 900:pl-0'>
						<Videos videos={videos} className="grid-cols-videodetail" />
					</div>
				</div>
			</section>
		</>
	)
}

export default VideoDetail