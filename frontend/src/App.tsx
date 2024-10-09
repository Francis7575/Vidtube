import { Routes, Route } from 'react-router-dom'
import { IRouterType } from './types/types';
import { Suspense, useEffect } from 'react';
import { PAGE_DATA } from "./utils/pageData"
import LoadingPage from './pages/LoadingPage';
import toast from 'react-hot-toast'
import { useAuth } from './context/userContext';

const BACKEND_URL = import.meta.env.VITE_REACT_BACKEND_URL

const renderRoutes = (routes: IRouterType[]) => {
  return routes.map(({ title, path, element, children = [] }: IRouterType) => (
    <Route key={title} path={path} element={element}>
      {children.length > 0 && renderRoutes(children)}
    </Route>
  ));
};

export const PageRouter = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>{renderRoutes(PAGE_DATA)}</Routes>
    </Suspense>
  );
};

const App = () => {
  const auth = useAuth();

  useEffect(() => {
    const checkUserCookie = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/users/check-logged-in`, {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          if (data && data.username) { // Check if username exists in the response
            auth?.setUser({ username: data.username, email: data.email });
            auth?.setIsLoggedIn(true); // Set logged in state
            toast.success('Already logged in');
          } else {
            toast.error('User is not logged in');
          }
        }
      } catch (err: unknown) {
        console.error("checkUserCookie error:", err);
        throw err;
      }
    };
    checkUserCookie();
  }, []);

  return <PageRouter />;
};

export default App