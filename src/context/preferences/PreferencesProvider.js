import React, { useState, useMemo } from 'react'
import PreferencesContext from './PreferencesContext'
const PreferencesProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const preference = useMemo(() => ({
        toggleTheme,
        theme
    }), [theme])
    return (
        <PreferencesContext.Provider
            value={preference}
        >
            {children}
        </PreferencesContext.Provider>
    )
}

export default PreferencesProvider
