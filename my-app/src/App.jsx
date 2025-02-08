import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import DebouncedSearchInput from './pages/DebouncedSearchInput'
import FetachingData from './pages/FetachingData'
import ApiCall from './pages/ApiCall'
import VirtualizedList from './pages/VirtualizedList'
import Counter from './pages/counter'

const App = () => {
  return (

    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="debounce" element={<DebouncedSearchInput />} />
        <Route path="api" element={<FetachingData />} />
        <Route path="call" element={<ApiCall />} />
        <Route path="list" element={<VirtualizedList />} />
        <Route path="counter" element={<Counter />} />


      </Routes>
    </Router>

  )
}

export default App
