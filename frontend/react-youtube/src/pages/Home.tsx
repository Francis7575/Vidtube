import { Navbar, Feed } from "../components"
import { HomeProps } from "../types/types"

const Home = ({ loggedIn, onLogout }: HomeProps) => {

    return (
        <>
            <Navbar
                onLogout={onLogout}
                loggedIn={loggedIn}
            />
            <Feed />
        </>
    )
}

export default Home