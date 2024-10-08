import { SearchInput, Logo } from '../components'
import userIcon from '/assets/user.png'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/Context'
import { useEffect, useRef } from 'react'
import { useAuth } from '../context/userContext'
import toast from 'react-hot-toast'

const BACKEND_URL = import.meta.env.VITE_REACT_BACKEND_URL;

const Navbar = () => {
	const { isSearchVisible, isUserOptionsVisible, handleUserIconClick, setIsUserOptionsVisible } = useUserContext();
	const authRef = useRef<HTMLButtonElement>(null);
	const auth = useAuth()
	const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/users/logout`, {
        method: "GET",
        headers: { 'Content-Type': "application/json" },
        credentials: "include"
      })
      const data = await response.json();
      console.log(data)
      auth?.setIsLoggedIn(false)
      toast.success("Succesfully Logged out", { id: "userLogout" });
      navigate("/login")
    } catch (error: unknown) {
      console.error("Error logging out:", error);
      toast.error("Unable to logout", { id: "userLogout" });
    }
  }

	const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (authRef.current && !authRef.current.contains(event.target as Node)) {
				const authContainer = document.getElementById("auth-container");
				if (authContainer && authContainer.contains(event.target as Node)) {
					return; // If the click is on the cart button, do nothing
				}
				setIsUserOptionsVisible(false);
			}
		};

		if (isUserOptionsVisible) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isUserOptionsVisible, setIsUserOptionsVisible])

	return (
		<div className='w-full fixed top-0 left-0 right-0 z-50 shadow-md bg-white px-4 pt-4 pb-4'>
			<nav className={`${isSearchVisible ? 'sx:justify-center' : 'sx:justify-between '} relative justify-between flex items-center`}>
				<Logo />
				<SearchInput />
				<div>
					<div className="flex">
						<button ref={authRef}
							onClick={handleUserIconClick}
							className='max-w-[1.4rem] ml-4'
							aria-label="User profile">
							<img
								src={userIcon}
								alt="User" />
						</button>
					</div>
					<div className='relative'>
						{isUserOptionsVisible && (
							<div
								onClick={handleContainerClick}
								id="auth-container"
								className={`login-container shadow-login bg-white text-center mt-3 
                            ${isSearchVisible ? 'mt-2' : 'mt-0'}`}>
								{auth?.isLoggedIn ? (
									<button onClick={handleLogout} className='text-red font-medium'>
										Logout
									</button>
								) : (
									<div className='flex flex-col items-center'>
										<Link to="/login" className='text-red font-medium hover:opacity-70'>
											Login
										</Link>
										<Link to="/signup" className='text-red font-medium hover:opacity-70'>
											Signup
										</Link>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar