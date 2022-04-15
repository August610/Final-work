import React from "react"
export const AppContext = React.createContext({
    favorites: [],
    handlePostLike: () => {},
    isLoading: false,
    pageLimit: 0
})
AppContext.displayName = "AppContext";