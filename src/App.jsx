import React from 'react'
import Main from './components/main/Main'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import CategoryById from './components/main/CategoryById'
import Layout2 from './layout/Layout2'

function App() {
  return (
    <div className='relative min-h-screen flex flex-col'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="/" element={<Layout2 />}>
          <Route index element={<Main />} />
          <Route path="/category" element={<CategoryById />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App