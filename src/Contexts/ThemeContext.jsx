import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const changeToLight = () => {
        setIsDark(false);
    }

    const changeToDark = () => {
        setIsDark(true);
    }

    const providerValue = {
        isDark,
        toggleTheme,
        changeToLight,
        changeToDark
    }

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    )
}
