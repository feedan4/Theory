import React, { createContext, useEffect, useState } from 'react'
import { getAllCategories, getAllProducts, getProductById } from '../services/api'
import { useLocation } from 'react-router-dom'

export const DATA = createContext(null)

function DataContext({ children }) {
  const [category, setCategory] = useState(null)
  const [data, setData] = useState(null)
  const [probyid, setProById] = useState(null)

  // console.log(data);

  const location = useLocation()
  const [showVideo, setShowVideo] = useState(true)

  useEffect(() => {
    (location.pathname == "/") ? setShowVideo(true) : setShowVideo(false)
  }, [location.pathname])

  useEffect(() => {
    getAllCategories().then(res => { setCategory(res) })
    getAllProducts().then(res => { setData(res.data) })
    getProductById().then(res => { setProById(res.data) })
  }, [])

  return (
    <DATA.Provider value={{
      data, setData,
      category, setCategory,
      probyid, setProById,
      showVideo, setShowVideo
    }}>
      {children}
    </DATA.Provider>
  )
}

export default DataContext