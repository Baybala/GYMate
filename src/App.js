import Header from './Header/Header'
import Body from './Body/Home/Home'
import Footer from './Footer/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './Body/About/About'
import Gallery from './Body/Gallery/Gallery'
import Schedule from './Body/Schedule/Schedule'
import Blog from './Body/Blog/Blog'
import Pricing from './Body/Pricing/Pricing'
import Classes from './Body/Classes/Classes'
import Contact from './Body/Contact/Contact'
import BodyheaderLayout from './Body/BodyHeaderLayout'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Body />} />
        <Route path="/" element={<BodyheaderLayout />}>
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="blog" element={<Blog />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="classes" element={<Classes />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
