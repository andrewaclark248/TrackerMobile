import React from 'react'

const TrackerContext = React.createContext();

export const TrackerProvider = ({children}) => {
    return <TrackerContext.Provider>
        {children}
    </TrackerContext.Provider>
};
