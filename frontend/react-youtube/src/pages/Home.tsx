import { Navbar, Feed } from "../components"
import { useState } from "react"
import { HomeProps } from "../types/types"

const Home = ({ loggedIn, onLogout, username }: HomeProps) => {
    const [isLogoVisible, setLogoVisible] = useState<boolean>(true);
    const [isInputVisible, setInputVisible] = useState<boolean>(false);
    const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
    const [isUserOptionsVisible, setUserOptionsVisible] = useState(false);


    const handleSearchClick = () => {
        setInputVisible(true);
        setLogoVisible(false);
        setIsSearchVisible(true);
        setUserOptionsVisible(false); // Hide user options when search is active
        setInputVisible(true);
    };

    const handleGoBackClick = () => {
        setInputVisible(true);
        setLogoVisible(true);
        setIsSearchVisible(false);
        setInputVisible(false);
        setUserOptionsVisible(false);
    };

    const handleUserIconClick = () => {
        setUserOptionsVisible((prevState) => !prevState);
    };

    return (
        <>
            <Navbar
                isLogoVisible={isLogoVisible}
                username={username}
                onLogout={onLogout}
                loggedIn={loggedIn}
                isSearchVisible={isSearchVisible}
                onSearchClick={handleSearchClick}
                onGoBackClick={handleGoBackClick}
                isInputVisible={isInputVisible}
                onUserIconClick={handleUserIconClick}
                isUserOptionsVisible={isUserOptionsVisible} />
            <Feed />
        </>
    )
}

export default Home