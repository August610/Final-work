import React from "react"
export const AppContext = React.createContext({
    favorites: [],
    handlePostLike: () => {},
    isLoading: false,
})
AppContext.displayName = "AppContext";