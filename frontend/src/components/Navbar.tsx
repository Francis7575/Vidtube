import { SearchInput, Logo } from '../components'
import userIcon from '/assets/user.png'
import { Link } from 'react-router-dom'
import { useUserContext } from '../useContext/userContext'

const Navbar = () => {
    const { isSearchVisible, isUserOptionsVisible, handleUserIconClick, loggedInContext, handleLogoutContext } = useUserContext();

    return (
        <div className='w-full fixed top-0 left-0 right-0 z-50 shadow-md bg-white px-4 pt-4 pb-2'>
            <nav className={`${isSearchVisible ? 'sx:justify-center' : 'sx:justify-between '} justify-between flex items-center`}>
                <Logo />
                <SearchInput />
                <div className='hidden 540:block'>
                    <button
                        onClick={handleUserIconClick}
                        className='max-w-[1.4rem] ml-4'
                        aria-label="User profile">
                        <img
                            src={userIcon}
                            alt="User" />
                    </button>
                    {isUserOptionsVisible && (
                        <div className='relative'>
                            <div className={`login-container shadow-login bg-white text-center mt-3
                            ${isSearchVisible ? 'mt-2' : 'mt-0'}`}>
                                {loggedInContext ? (
                                    <button onClick={handleLogoutContext} className='text-red font-medium'>
                                        Logout
                                    </button>
                                ) : (
                                    <>
                                        <Link to="/login" className='text-red font-medium'>
                                            Login
                                        </Link>
                                        <Link to="/signup" className='text-red font-medium'>
                                            Signup
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            </div>
    )
}

export default Navbar