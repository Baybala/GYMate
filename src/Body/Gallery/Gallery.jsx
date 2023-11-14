import { useEffect } from 'react'
import './Gallery.css'

const Gallery = () => {
  useEffect(() => {
    const element = document.getElementById('gallery')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  })
  return <div className="gallery" id="gallery"></div>
}

export default Gallery
