import { useState, useEffect } from "react";
import { LoginData, SignupData } from "../types/types";

const BACKEND_URL = import.meta.env.VITE_REACT_BACKEND_URL;

export const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  console.log(email);

  useEffect(() => {
    const checkUserCookie = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/users/check-logged-in`, {
          credentials: "include",
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

  const handleLogin = async (formData: LoginData, rememberMe: boolean): Promise<boolean> => {
    try {
      const response = await fetch(`${BACKEND_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          rememberMe,
        }),
        credentials: "include", // Crucial for including cookies
      });
      const data = await response.json();
      if (response.ok) {
        setLoggedIn(true);
        setEmail(data.email);
        setUsername(data.username);
        return true; // Return true if login is successful
      } else {
        alert(data.message);
        return false; // Return false if login fails
      }
    } catch (err) {
      console.error(err);
      return false; // Return false if an error occurs
    }
  };

  const handleSignup = async (formData: SignupData)  => {
    console.log("Signup form data:", formData);
    try {
      const response = await fetch(`${BACKEND_URL}/users/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
        credentials: "include",
      });
      const data = await response.json();

      if (response.ok) {
        setEmail(data.email);
        setLoggedIn(true);
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
    const response = await fetch(`${BACKEND_URL}/users/logout`, {
      credentials: "include",
    });
    const data = await response.json();
    setEmail("");
    setUsername("");
    setLoggedIn(data.loggedIn);
  };

  return { loggedIn, username, handleLogin, handleSignup, handleLogout };
};
