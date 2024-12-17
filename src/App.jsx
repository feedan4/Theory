import React, { useContext, useEffect } from 'react'
import Main from './components/main/Main'
import Layout from './layout/Layout'
import { Route, Routes, useLocation } from 'react-router-dom'
import ShopNow from './components/main/ShopNow'
import { DATA } from './context/DataContext'
import AboutUs from './components/main/AboutUs'
import ProductsById from './components/main/ProductsById'
import Details from './components/main/Details'

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
          <Route path="/productsbyid" element={<ProductsById />} />
          <Route path="/details/:proid" element={<Details />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App