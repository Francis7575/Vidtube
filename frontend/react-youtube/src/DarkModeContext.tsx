import { createContext, useContext, useState, ReactNode } from 'react';

type DarkModeContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}   

const DarkModeContext = createContext<DarkModeContextType>({ 
    isDarkMode: true,
    toggleDarkMode: () => {},
});

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export const useDarkMode = () => useContext(DarkModeContext);