import { SearchInput, Logo } from '../components'
import userIcon from '/assets/user.png'
import { Link } from 'react-router-dom'
import { useUserContext } from '../useContext/userContext'
import { useAuth } from '../hooks/useAuth'
import { useClickOutside } from '../hooks/useClickOutside'
import { MouseEvent } from 'react'

const Navbar = () => {
	const { isSearchVisible, isUserOptionsVisible, handleUserIconClick } = useUserContext();
	const { loggedIn, handleLogout } = useAuth()
	const authRef = useClickOutside();

	const handleContainerClick = (e: MouseEvent<HTMLDivElement>) => {
		console.log('Container clicked', e);
		e.stopPropagation();
	};

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
								{loggedIn ? (
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