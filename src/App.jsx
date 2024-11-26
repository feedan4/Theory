import React, { useContext } from 'react'
import Main from './components/main/Main'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import CategoryById from './components/main/CategoryById'
import ShopNow from './components/main/ShopNow'
import { DATA } from './context/DataContext'

function App() {
  const {showVideo} = useContext(DATA)
  console.log(showVideo);
  
  return (
    <div className={`relative min-h-screen flex flex-col ${showVideo ? 'bg-[#dadada]' : 'bg-white'}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/category" element={<CategoryById />} />
          <Route path="/shopnow" element={<ShopNow />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App