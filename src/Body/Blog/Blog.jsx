import { useEffect } from 'react'
import './Blog.css'

const Blog = () => {
  useEffect(() => {
    const element = document.getElementById('blog')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  })
  return <div className="blog" id="blog"></div>
}

export default Blog
