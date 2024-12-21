import React, { createContext, useEffect, useState } from 'react'
import { getAllCategories, getAllProducts, getProductById } from '../services/api'
import { useLocation } from 'react-router-dom'

export const DATA = createContext(null)

function DataContext({ children }) {
  const [category, setCategory] = useState(null)
  const [data, setData] = useState(null)
  const [probyid, setProById] = useState(null)
  const [wish, setWish] = useState([])

  // console.log(data);

  const location = useLocation()
  const [showVideo, setShowVideo] = useState(true)

  function addToWishlist(id, img, name, price, discount) {
    if (wish.some(item => item.id === id)) {
      setWish(wish.filter(item => item.id !== id ? { ...item, id, img, name, price, discount } : item))
    } else {
      setWish([...wish, { id, img, name, price, discount }])
    }

  }

  function removeWish(id) {
    const newWish = wish.find(item => item.id != id)
    setWish(newWish)
  }

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
      showVideo, setShowVideo,
      wish, setWish,
      addToWishlist, removeWish,
    }}>
      {children}
    </DATA.Provider>
  )
}

export default DataContext