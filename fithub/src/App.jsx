import {BrowserRouter, Routes, Route } from 'react-router'
import { Frontpage } from './pages/Frontpage'
import { Homepage } from './pages/Homepage'
import { Classdetailspage } from './pages/Classdetailspage'
import { Searchpage } from './pages/Searchpage'
import { Schulepage } from './pages/Schulepage'
import { Loginpage } from './pages/Loginpage'
import { Mainlayout } from './layout/Mainlayout'





function App() {
  

  return (
    <>

    <BrowserRouter>
   
    <Routes>
      
     <Route path="/"  element={<Frontpage />} />
     <Route path="/"  element={<Mainlayout />}>
      <Route path="/home"  element={<Homepage />} />
      <Route path="/class/:id"  element={<Classdetailspage />} />
      <Route path="/search"  element={<Searchpage />} />
      <Route path="/schedule/:id"  element={<Schulepage />} />
      <Route path="/login"  element={<Loginpage />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
