import { Outlet } from "react-router-dom"
import { Navbar, Sidebar } from './index'
import { useUserContext } from "../useContext/userContext"

const Layout = () => {
  const { selectedCategory, setSelectedCategory } = useUserContext()

  return (
    <>
      <Navbar />
      <div className="md:flex">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Outlet />
      </div>
    </>
  )
}

export default Layout