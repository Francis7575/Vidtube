import { createContext, useState, useContext, ReactNode } from 'react';

type UserContextType = {
    isUserOptionsVisible: boolean;
    setIsUserOptionsVisible: (visible: boolean) => void;
    isSearchVisible: boolean;
    isInputVisible: boolean;
    handleSearchClick: () => void;
    handleUserIconClick: () => void;
};

type UserProviderProps = {
    children: ReactNode;
};

const initialUserContext: UserContextType = {
    isUserOptionsVisible: false,
    setIsUserOptionsVisible: () => {},
    isSearchVisible: false,
    isInputVisible: false,
    handleSearchClick: () => {},
    handleUserIconClick: () => {},
};

const UserContext = createContext<UserContextType>(initialUserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
    const [isInputVisible, setInputVisible] = useState<boolean>(false);
    const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
    const [isUserOptionsVisible, setIsUserOptionsVisible] = useState<boolean>(false);

    const handleSearchClick = () => {
        setInputVisible(true);
        setIsSearchVisible(true);
        setIsUserOptionsVisible(false); // Hide user options when search is active
    };

    const handleUserIconClick = () => {
        setIsUserOptionsVisible((prevState) => !prevState);
    };

    return (
        <UserContext.Provider
            value={{
                isUserOptionsVisible,
                setIsUserOptionsVisible,
                isSearchVisible,
                isInputVisible,
                handleSearchClick,
                handleUserIconClick,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
