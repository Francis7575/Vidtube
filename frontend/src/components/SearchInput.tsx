import iconSearch from '/assets/icon-search.png'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { useUserContext } from '../useContext/userContext'

const SearchInput = () => {
  const { handleSearchClick } = useUserContext();
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
    <form onSubmit={handleSubmit}>
      <div className='flex justify-center items-center relative'>
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='md:w-[300px] w-[180px] relative lg:w-[450px] pl-4 pr-2 py-1 border rounded ml-3 border-input outline-none'
          placeholder="Search..."
          aria-label="Search input"
        />
        <button
          className={`max-w-[1.25rem] w-full cursor-pointer absolute top-[6px] right-[9px]`}
          onClick={handleSearchClick}
          aria-label="Search">
          <img
            src={iconSearch}
            alt="Search Icon"
          />
        </button>
      </div >
    </form>
  )
}

export default SearchInput