import React, { createContext, useEffect, useState } from 'react'
import { getAllCategories, getAllProducts } from '../services/api'
import { useLocation } from 'react-router-dom'

export const DATA = createContext(null)

function DataContext({ children }) {

  const [data, setData] = useState(null)
  const [category, setCategory] = useState(null)

  // console.log(category);

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
      category, setCategory,
      showVideo, setShowVideo
    }}>
      {children}
    </DATA.Provider>
  )
}

export default DataContext