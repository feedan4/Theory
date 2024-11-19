import React, { createContext } from 'react'

export const DATA = createContext([])

function DataContext({children}) {
  return (
    <DATA.Provider>
        {children}
    </DATA.Provider>
  )
}

export default DataContext