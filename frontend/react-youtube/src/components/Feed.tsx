import { useState } from 'react'
import { Sidebar, Videos } from '../components'

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('New')

    return (
        <div className='md:flex'>
            <Sidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <Videos
                selectedCategory={selectedCategory}
            />
        </div>
    )
}

export default Feed