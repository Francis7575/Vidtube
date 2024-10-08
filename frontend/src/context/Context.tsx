import { createContext, useState, useContext, ReactNode } from 'react';

type ContextType = {
    isUserOptionsVisible: boolean;
    setIsUserOptionsVisible: (visible: boolean) => void;
    isSearchVisible: boolean;
    handleSearchClick: () => void;
    handleUserIconClick: () => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
};

type ContextProviderProps = {
    children: ReactNode;
};

const initialUserContext: ContextType = {
    isUserOptionsVisible: false,
    setIsUserOptionsVisible: () => { },
    isSearchVisible: false,
    handleSearchClick: () => { },
    handleUserIconClick: () => { },
    selectedCategory: 'New',
    setSelectedCategory: () => { },
};

const Context = createContext<ContextType>(initialUserContext);

export const ContextProvider = ({ children }: ContextProviderProps) => {
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
        <Context.Provider
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
        </Context.Provider>
    );
};

export const useUserContext = () => useContext(Context);
