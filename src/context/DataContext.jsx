import React, { createContext, useEffect, useState } from 'react'
import { getAllCategories, getAllProducts } from '../services/api'

export const DATA = createContext(null)

function DataContext({children}) {

  const [data, setData ]= useState(null)
  const [category, setCategory] = useState(null)
  console.log(category);
  


  useEffect(() => {
    getAllCategories().then(res => {setCategory(res)})  
    getAllProducts().then(res => {setData(res.data)}) 
    
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