import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Services from './pages/services'

function App() {


  return (
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
