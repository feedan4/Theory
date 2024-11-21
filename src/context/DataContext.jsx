import React, { createContext, useEffect, useState } from 'react'
import { getAllCategories, getAllProducts } from '../services/api'

export const DATA = createContext(null)

function DataContext({children}) {

  const [data, setData ]= useState(null)
  const [category, setCategory] = useState([])


  useEffect(() => {
    getAllCategories().then(res => {getAllCategories(res)})  
    getAllProducts().then(res => {getAllProducts(res)}) 
  }, [])
 
  return (
    <DATA.Provider value={{
      data, setData ,
      category, setCategory
    }}>
        {children}
    </DATA.Provider>
  )
}

export default DataContext