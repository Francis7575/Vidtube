import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Navbar, Sidebar } from './index'
import { useUserContext } from "../useContext/userContext"
import { useEffect, useState } from "react"

const Layout = () => {
  const { selectedCategory, setSelectedCategory } = useUserContext()
  const [isHomeRoute, setIsHomeRoute] = useState<boolean>(true)
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === '/') {
      setIsHomeRoute(true);
    } else {
      setIsHomeRoute(false);
    }
  }, [location.pathname]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    navigate('/'); // Navigate back to home page
  };

  return (
    <>
      <Navbar />
      <div className="md:flex">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={isHomeRoute ? setSelectedCategory : handleCategorySelect}
        />
        <Outlet />
      </div>
    </>
  )
}

export default Layout