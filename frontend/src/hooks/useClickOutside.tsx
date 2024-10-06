import { useEffect, useRef } from "react";
import { useUserContext } from "../useContext/userContext";

export const useClickOutside = () => {
  const authRef = useRef<HTMLButtonElement>(null); 
  const { setIsUserOptionsVisible, isUserOptionsVisible } = useUserContext(); 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (authRef.current && !authRef.current.contains(event.target as Node)) {
        const cartButton = document.getElementById("auth-container");
        if (cartButton && cartButton.contains(event.target as Node)) {
          return; // If the click is on the cart button, do nothing
        }
        setIsUserOptionsVisible(false); 
      }
    };

    if (isUserOptionsVisible) {
      document.addEventListener("mousedown", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [isUserOptionsVisible, setIsUserOptionsVisible]);

  // Return the ref so the calling component can assign it to its element
  return authRef;
};