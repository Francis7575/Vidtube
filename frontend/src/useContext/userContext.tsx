import { createContext, useState, useContext, ReactNode } from 'react';

type UserContextType = {
    isUserOptionsVisible: boolean;
    setIsUserOptionsVisible: (visible: boolean) => void;
    isSearchVisible: boolean;
    handleSearchClick: () => void;
    handleUserIconClick: () => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
};

type UserProviderProps = {
    children: ReactNode;
};

const initialUserContext: UserContextType = {
    isUserOptionsVisible: false,
    setIsUserOptionsVisible: () => { },
    isSearchVisible: false,
    handleSearchClick: () => { },
    handleUserIconClick: () => { },
    selectedCategory: 'New',
    setSelectedCategory: () => { },
};

const UserContext = createContext<UserContextType>(initialUserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
    const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
    const [isUserOptionsVisible, setIsUserOptionsVisible] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('New')

    const handleSearchClick = () => {
        setIsSearchVisible(true);
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
                handleSearchClick,
                handleUserIconClick,
                selectedCategory,
                setSelectedCategory
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
