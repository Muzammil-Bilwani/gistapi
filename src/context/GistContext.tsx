import React from "react"

const GistContext = React.createContext({})

export const GistProvider = GistContext.Provider
export const GistConsumer = GistContext.Consumer

export default GistContext
