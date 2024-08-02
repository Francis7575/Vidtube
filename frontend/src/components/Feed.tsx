import { useState, useEffect } from 'react'
import { searchData } from "../types/types"
import { Sidebar, Videos } from '../components'
import { fetchApi } from '../utils/fetchApi'

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('New')
    const [videos, setVideos] = useState<searchData[]>([]);

    useEffect(() => {
        fetchApi(`search?q=${selectedCategory}&part=snippet`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <div className='md:flex'>
            <Sidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <div className="flex-1">
                <h2 className='pl-4 mt-4 md:mt-[5.2rem] mb-3 font-medium text-[1.3rem] 540:text-[1.5rem] lg:text-[1.9rem]'>
                    <span className='text-darkblue'>{selectedCategory}</span>
                    <span className='text-red ml-1'>Videos</span>
                </h2>
                <Videos videos={videos} className='grid-cols-dynamic'/>
            </div>
        </div>
    )
}

export default Feed