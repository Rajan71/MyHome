import React, { useState } from 'react';
import HomeContext from './HomeContext';

const HomeProvider = ({ children }) => {
    const [value, setValue] = useState(false);

    return (
        <HomeContext.Provider value={{ value, setValue }}>
            {children}
        </HomeContext.Provider>
    );
};

export default HomeProvider;