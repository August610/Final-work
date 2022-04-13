import React from "react"

export const DeleteContext = React.createContext({
    handleDeletePost: () => {},
    handleDeleteComment: () => {},
})

DeleteContext.displayName = "DeleteContext";

