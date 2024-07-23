import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Landing from './Pages/Landing'

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Navigate to={"/home"} />} />
          <Route index path='/home' element={<Landing />} />
          <Route index path='/add-event' element={<Landing />} />
          <Route index path='/view-event' element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
