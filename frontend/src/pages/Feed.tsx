import { useState, useEffect } from 'react'
import { searchData } from "../types/types"
import { Videos } from '../components'
import { fetchApi } from '../utils/fetchApi'
import { useUserContext } from '../context/Context'
import { useAuth } from '../context/userContext'
import toast from 'react-hot-toast'

const Feed = () => {
	const [videos, setVideos] = useState<searchData[]>([]);
	const { selectedCategory } = useUserContext()
	const auth = useAuth();

	useEffect(() => {
		const checkUserCookie = async () => {
			try {
				const response = await fetch(`${import.meta.env.BACKEND_URL}/users/check-logged-in`, {
					method: "GET",
					credentials: "include",
				});
				const data = await response.json();
				if (data) {
					auth?.setUser({ username: data.username, email: data.email, });
					auth?.setIsLoggedIn(true);
					toast.success("Already logged in!");
				}
			} catch (err) {
        console.error("checkUserCookie error:", err);
			}
		};
		checkUserCookie();
	}, []);

	useEffect(() => {
		fetchApi(`search?q=${selectedCategory}&part=snippet`)
			.then((data) => setVideos(data.items))
	}, [selectedCategory]);

	return (
		<div className="flex-1">
			<h2 className='pl-4 mt-4 md:mt-[5.2rem] mb-3 font-medium text-[1.3rem] 540:text-[1.5rem] lg:text-[1.9rem]'>
				<span className='text-darkblue'>{selectedCategory}</span>
				<span className='text-red ml-1'>Videos</span>
			</h2>
			<Videos videos={videos} className='grid-cols-dynamic' />
		</div>
	)
}

export default Feed