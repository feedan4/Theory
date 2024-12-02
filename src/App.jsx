import React, { useContext } from 'react'
import Main from './components/main/Main'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import ShopNow from './components/main/ShopNow'
import { DATA } from './context/DataContext'
import AboutUs from './components/main/AboutUs'
import ProductsById from './components/main/ProductsById'

function App() {
  const {showVideo} = useContext(DATA)
  console.log(showVideo);
  
  return (
    <div className={`relative min-h-screen flex flex-col ${showVideo ? 'bg-[#dadada]' : 'bg-white'}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/shopnow/:catname/:catid" element={<ShopNow />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/productsbyid/:catname/:catid/:subname/:subid" element={<ProductsById />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App