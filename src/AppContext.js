import React, { createContext, useState } from 'react';

// Create the context with default values
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
    // State to be shared
    const [user, setUser] = useState(null);

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
