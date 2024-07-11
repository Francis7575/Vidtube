import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginData, SignupData } from '../types/types'
import { useUserContext } from '../useContext/userContext';

export const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const { handleLoginContext } = useUserContext();
  console.log(email)
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserCookie = async () => {
      try {
        const response = await fetch(`http://localhost:4000/users/check-logged-in`, {
          credentials: 'include'
        });
        const data = await response.json();
        if (response.ok) {
          setLoggedIn(data.loggedIn);
          setEmail(data.email);
          setUsername(data.username);
        }
      } catch (err) {
        console.error(err);
      }
    };
    checkUserCookie();
  }, []);

  const handleLogin = async (formData: LoginData, rememberMe: boolean) => {
    try {
      const response = await fetch(`http://localhost:4000/users/login`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
        credentials: 'include'
      });
      const data = await response.json();

      if (response.ok) {
        setLoggedIn(data.loggedIn);
        handleLoginContext(true)
        setEmail(data.email);
        setUsername(data.username);
      } else {
        alert(data.message);
      }
      if (rememberMe) {
        document.cookie = `email=${data.email}; max-age=${60 * 60 * 24}; path=/`;
      } else {
        document.cookie = `email=${data.email}; max-age=0; path=/`; // Clear cookie if remember me is not checked
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignup = async (formData: SignupData): Promise<boolean> => {
    console.log('Signup form data:', formData);
    try {
      const response = await fetch(`http://localhost:4000/users/signup`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username: formData.username, email: formData.email, password: formData.password }),
        credentials: 'include'
      });
      const data = await response.json();

      if (response.ok) {
        setEmail(data.email);
        setLoggedIn(data.loggedIn);
        handleLoginContext(true)
        setUsername(data.username);
        return true; 
      } else {
        alert(data.message);
        return false; 
      }
    } catch (err) {
      console.error(err);
      return false; 
    }
  };

  const handleLogout = async () => {
    const response = await fetch(`http://localhost:4000/users/logout`, {
      credentials: 'include'
    });
    const data = await response.json();
    setEmail('');
    setUsername('');
    setLoggedIn(data.loggedIn);
    navigate('/login');
  };

  return { loggedIn, username, handleLogin, handleSignup, handleLogout };
};
