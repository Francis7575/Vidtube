import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchApi } from '../utils/fetchApi'
import { Videos, Navbar, Sidebar } from '../components'
import { searchData } from '../types/types'

const SearchFeed = () => {
    const [videos, setVideos] = useState<searchData[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const { searchTerm } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        fetchApi(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm, selectedCategory])

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        navigate('/'); // Navigate back to home page
    };

    return (
        <>
            <Navbar />
            <div className='flex flex-col md:flex-row'>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={handleCategorySelect}
                />
                <div className=' mt-4 md:mt-[5rem] flex-1'>
                    <p className='font-medium ml-4'>
                        Search Results for
                        <span className='text-red'> {selectedCategory || searchTerm} </span>
                        videos
                    </p>
                    <div className='mt-4 '>
                        <Videos videos={videos} className='grid-cols-dynamic'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchFeed