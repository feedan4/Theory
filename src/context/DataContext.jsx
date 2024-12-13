import React, { createContext, useEffect, useState } from 'react'
import { getAllCategories, getAllProducts } from '../services/api'
import { useLocation } from 'react-router-dom'

export const DATA = createContext(null)

function DataContext({ children }) {
  const [category, setCategory] = useState(null)
  const [data, setData] = useState(null)
  const [probycat, setProByCat] = useState(null)

  // console.log(probycat);
  

  const location = useLocation()
  const [showVideo, setShowVideo] = useState(true)

  useEffect(() => {
    (location.pathname == "/") ? setShowVideo(true) : setShowVideo(false)
  }, [location.pathname])

  useEffect(() => {
    getAllCategories().then(res => { setCategory(res) })
    getAllProducts().then(res => { setData(res.data) })
  }, [])

  return (
    <DATA.Provider value={{
      data, setData,
      probycat, setProByCat,
      category, setCategory,
      showVideo, setShowVideo
    }}>
      {children}
    </DATA.Provider>
  )
}

export default DataContext