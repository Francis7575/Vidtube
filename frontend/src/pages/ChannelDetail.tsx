import { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { fetchApi } from '../utils/fetchApi'
import { Videos, ChannelCard } from '../components'
import { searchData } from '../types/types'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState<searchData | null>(null)
  const [videos, setVideos] = useState<searchData[]>([]);
  const { id } = useParams()
  const location = useLocation();
  const currentPath = location.pathname;
  const channelPath = `/channel/${id}`;
  const isCurrentPage = currentPath === channelPath;

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0] || null));

    fetchApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items || []));
  }, [id]);

  const subscriberCount = channelDetail?.statistics?.subscriberCount;

  return (
    <div>
      <div style={{
        background: 'linear-gradient(90deg, #4add81, #43b2b9, #3c88ee)',
        zIndex: 10,
        height: '300px'
      }} />
      {channelDetail && (
        <div className="flex flex-col items-center">
          <ChannelCard
            channelDetail={channelDetail}
            marginTop="-110px"
            maxWidth="170px"
            disabled={isCurrentPage}
          />
          {subscriberCount && (
            <p className="mt-2 text-second-darkblue-opc-70 text-[.9rem] md:text-[1rem]">
              {parseInt(subscriberCount).toLocaleString()} subscribers
            </p>
          )}
        </div>
      )}
      <div className='px-[2rem] lg:px-[5.5rem] mt-[4rem]'>
        <Link to="/" className='bg-dark-blue flex items-center justify-between max-w-[220px] text-white uppercase rounded-xl hover:opacity-80 py-2 pl-4 pr-2'>
          <span className='mr-4'>Go Back to Home</span>
          <KeyboardDoubleArrowLeftIcon />
        </Link>
        <div className='mt-4'>
          <Videos videos={videos} className='grid-cols-dynamic' />
        </div>
      </div>
    </div>
  )
}

export default ChannelDetail