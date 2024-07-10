import iconSearch from '/assets/icon-search.png'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { SearchInputProps } from '../types/types'
import { Link } from 'react-router-dom'
import userIcon from '/assets/user.png'
import { useUserContext } from '../useContext/userContext'

const SearchInput = ({ loggedIn, onLogout }: SearchInputProps) => {
  const { isInputVisible, isSearchVisible, isUserOptionsVisible, handleSearchClick, handleUserIconClick } = useUserContext();
  const [searchTerm, setSearchTerm] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className=''>
      <div className='flex justify-center relative'>
        <div className='hidden 540:block'>
          <input
            type="text"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='md:w-[300px]  relative lg:w-[380px] pl-4 pr-2 py-1 border rounded ml-3 border-input min-w-[15rem] outline-none'
            placeholder="Search..."
            aria-label="Search input"
          />
          <button
            className={`max-w-[1.4rem] cursor-pointer search-icon`}
            onClick={handleSearchClick}
            aria-label="Search">
            <img
              src={iconSearch}
              alt="Search Icon"
            />
          </button>
        </div>
        {isInputVisible && (
          <div className='flex items-center'>
            <input
              type="text"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-[190px] md:w-[300px] 540:hidden lg:w-[380px] pl-4 pr-2 py-1 border rounded ml-3 border-input outline-none'
              placeholder="Search..."
              aria-label="Search input"
            />
          </div>
        )}
        <div className='flex items-center justify-center relative'>
          <button
            className={`max-w-[1.4rem] cursor-pointer md:hidden 540:hidden ${isInputVisible && 'search-bar'}`}
            onClick={handleSearchClick}
            aria-label="Search">
            <img
              src={iconSearch}
              alt="Search Icon"
            />
          </button>
          {isUserOptionsVisible && (
            <div className={`login-container shadow-login bg-white text-center mt-3 540:hidden
                            ${isSearchVisible ? 'mt-2' : 'mt-0'}`}>
              {loggedIn ? (
                <button onClick={onLogout} className='text-red font-medium'>
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
          )}
          <button
            onClick={handleUserIconClick}
            className='max-w-[1.4rem] ml-4 540:hidden'
            aria-label="User profile">
            <img
              src={userIcon}
              alt="User" />
          </button>
        </div>
      </div >
    </form>
  )
}

export default SearchInput