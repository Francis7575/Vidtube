import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../utils/fetchApi'
import { Videos, SearchInput } from '../components'
import { searchData } from '../types/types'
import { useUserContext } from '../useContext/userContext'

const SearchFeed = () => {
	const [videos, setVideos] = useState<searchData[]>([])
	const { selectedCategory } = useUserContext()
	const { searchTerm } = useParams()

	useEffect(() => {
		fetchApi(`search?part=snippet&q=${searchTerm}`)
			.then((data) => setVideos(data.items))
	}, [searchTerm, selectedCategory])


	return (
		<>
			<div className='mt-4 md:mt-[5rem] flex-1'>
				<p className='font-medium ml-4'>
					Search Results for
					<span className='text-red'> {selectedCategory || searchTerm} </span>
					videos
				</p>
				<div className='mt-4 '>
					<Videos videos={videos} className='grid-cols-dynamic' />
				</div>
			</div>
		</>
	)
}

export default SearchFeed