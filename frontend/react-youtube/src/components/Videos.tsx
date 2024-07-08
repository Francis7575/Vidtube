import { VideosProps, searchData } from "../types/types"
import { useState, useEffect } from "react";
import { fetchApi } from '../utils/fetchApi'
import { VideoCard } from '../components'

const Videos = ({ selectedCategory }: VideosProps) => {
    const [videos, setVideos] = useState<searchData[]>([]);
    useEffect(() => {
        fetchApi(`search?q=${selectedCategory}&part=snippet`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);
    console.log(videos)

    return (
        <section>
            <div className="font-semibold text-[1.2rem] md:text-[1.5rem] mt-6 md:mt-2 ml-4">
                <h1 className="mr-1">
                    {selectedCategory}
                    <span className="text-red ml-1">
                        Videos
                    </span>
                </h1>
            </div>
            <div>
                {videos.map((item, index) => (
                    <div key={index}>
                        {item.id.videoId && <VideoCard  />}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Videos