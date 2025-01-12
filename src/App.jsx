import React, { useContext, useEffect } from 'react'
import Main from './components/main/Main'
import Layout from './layout/Layout'
import { Route, Routes, useLocation } from 'react-router-dom'
import ShopNow from './components/main/ShopNow'
import { DATA } from './context/DataContext'
import AboutUs from './components/main/AboutUs'
import ProductsById from './components/main/ProductsById'
import Details from './components/main/Details'
import AddToBasket from './components/main/AddToBasket'
import Wishlist from './components/main/Wishlist'
import Checkout from './components/main/Checkout'
import Order from './components/main/Order'

function App() {
  const {pathname} = useLocation()
  const { showVideo } = useContext(DATA)

  // console.log(showVideo);

  useEffect(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }, [pathname])

  return (
    <div className={`relative min-h-screen font-mont flex flex-col ${showVideo ? 'bg-[#dadada]' : 'bg-white'}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/shopnow" element={<ShopNow />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/productsbyid/all/:categid" element={<ProductsById />} />
          <Route path="/basket" element={<AddToBasket />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/details/:proid" element={<Details />} />
        </Route>
      </Routes>
    </div>
  )
  
}

export default App