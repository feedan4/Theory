import React, { createContext, useEffect, useState } from 'react'
import { getAllCategories, getAllProducts, getProductById, getProductsByCategory } from '../services/api'
import { useLocation } from 'react-router-dom'

export const DATA = createContext(null)

function DataContext({ children }) {
  const [category, setCategory] = useState(null)
  const [data, setData] = useState(null)
  const [probyid, setProById] = useState(null)
  const [probycatid, setProByCatId] = useState(null)
  const [wish, setWish] = useState([])

  const location = useLocation()
  const [showVideo, setShowVideo] = useState(true)

  console.log(probycatid);
  

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    setWish(savedWishlist)
  }, [])

  function addToWishlist(id, img, name, price, discount) {
    let newWishlist
    if (wish.find(item => item.id === id)) {
      newWishlist = wish.filter(item => item.id !== id)
    } else {
      newWishlist = [...wish, { id, img, name, price, discount }]
    }

    setWish(newWishlist)
    localStorage.setItem('wishlist', JSON.stringify(newWishlist))
  }
  
  function removeWish(id) {
    const newWishlist = wish.filter(item => item.id !== id)
    setWish(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist))
  }

  useEffect(() => {
    (location.pathname == "/") ? setShowVideo(true) : setShowVideo(false)
  }, [location.pathname])

  useEffect(() => {
    getAllCategories().then(res => { setCategory(res) })
    getAllProducts().then(res => { setData(res) })
    getProductById().then(res => { setProById(res.data) })
    getProductsByCategory().then(res => { setProByCatId(res) })
  }, [])

  return (
    <DATA.Provider value={{
      data, setData,
      category, setCategory,
      probyid, setProById,
      probycatid, setProByCatId,
      showVideo, setShowVideo,
      wish, setWish,
      addToWishlist, removeWish,
    }}>
      {children}
    </DATA.Provider>
  )
}

export default DataContext