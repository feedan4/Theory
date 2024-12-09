import React, { createContext, useEffect, useState } from 'react'
import { getAllCategories, getAllData, getAllProducts, getProductsByCategory } from '../services/api'
import { useLocation } from 'react-router-dom'

export const DATA = createContext(null)

function DataContext({ children }) {

  const [products, setProducts] = useState(null)
  const [probycat, setProByCat] = useState(null)
  const [category, setCategory] = useState(null)
  const [data, setData] = useState(null)

  // console.log(products);

  const location = useLocation()
  const [showVideo, setShowVideo] = useState(true)

  useEffect(() => {
    (location.pathname == "/") ? setShowVideo(true) : setShowVideo(false)
  }, [location.pathname])

  useEffect(() => {
    getAllCategories().then(res => { setCategory(res) })
    getAllData().then(res => { setData(res.data) })
    getAllProducts().then(res => { setProducts(res.data) })
    getProductsByCategory().then(res => { setProByCat(res.data) })

  }, [])

  return (
    <DATA.Provider value={{
      data, setData,
      probycat, setProByCat,
      products, setProducts,
      category, setCategory,
      showVideo, setShowVideo
    }}>
      {children}
    </DATA.Provider>
  )
}

export default DataContext