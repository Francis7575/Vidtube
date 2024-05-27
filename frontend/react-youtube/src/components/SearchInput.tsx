import iconSearch from '/assets/icon-search.png'
import backBtn from '/assets/icon-left-arrow.png'
import { FormEvent, useState } from 'react'
import { SearchInputProps } from '../types/types'
import userIcon from '/assets/user.png'
import { Link } from 'react-router-dom'

const SearchInput = ({ onSearchClick, isInputVisible, onGoBackClick, isSearchVisible, onUserIconClick, isUserOptionsVisible, loggedIn, onLogout, username }: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex justify-center relative'>
        {isInputVisible && (
          <div className='flex items-center '>
            <button onClick={onGoBackClick} className='max-w-[1.4rem]' aria-label="Go back">
              <img src={backBtn} alt="Back" />
            </button>
            <input
              type="text"
              name="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className='pl-4 pr-2 py-1 border rounded ml-3 border-input min-w-[15rem] outline-none'
              placeholder="Search..."
              aria-label="Search input"

            />
          </div>
        )}
        <div className='flex items-center justify-center relative'>
          <button
            className={`max-w-[1.4rem] cursor-pointer ${isInputVisible && 'search-bar'}`}
            onClick={onSearchClick}
            aria-label="Search">
            <img
              src={iconSearch}
              alt="Search Icon"
            />
          </button>
          {isUserOptionsVisible && (
            <div className={`login-container shadow-login bg-white text-center mt-3 
                            ${isSearchVisible ? 'mt-2' : 'mt-0'}`}>
              {loggedIn ? (
                <button onClick={onLogout}>
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login">
                    Login
                  </Link>
                  <Link to="/signup">
                    Signup
                  </Link>
                </>
              )}
            </div>
          )}
          <button
            onClick={onUserIconClick}
            className='max-w-[1.4rem] ml-4'
            aria-label="User profile">
            <img
              src={userIcon}
              alt="User" />
          </button>
          {loggedIn && (
            <p className='ml-2 font-medium underline'>
              {username}
            </p>
          )}
        </div>
      </div >
    </form>
  )
}

export default SearchInput