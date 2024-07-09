import { SearchInput, Logo } from '../components'
import { NavbarProps } from '../types/types'

const Navbar = ({ isLogoVisible, onSearchClick, onGoBackClick, isInputVisible, isSearchVisible, onUserIconClick, isUserOptionsVisible, loggedIn, onLogout, username }: NavbarProps) => {

    return (
        <nav className={`${isSearchVisible ? 'justify-center' : 'justify-between '} fixed top-0 left-0 right-0 z-50 shadow-md bg-white p-4 flex items-center`}>
            <Logo isLogoVisible={isLogoVisible} />
            <SearchInput
                username={username}
                loggedIn={loggedIn}
                onLogout={onLogout}
                isUserOptionsVisible={isUserOptionsVisible}
                onUserIconClick={onUserIconClick}
                isInputVisible={isInputVisible}
                isSearchVisible={isSearchVisible}
                onSearchClick={onSearchClick}
                onGoBackClick={onGoBackClick} />
        </nav>
    )
}

export default Navbar