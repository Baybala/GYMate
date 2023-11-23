import React, { useState } from 'react'
import './Gallery.css'
import { Pagination } from '@mui/material'

const Gallery = () => {
  const gridElement = () => {
    return [
      { picture: './pictures/Picture1.jpeg' },
      { picture: './pictures/Picture2.jpg' },
      { picture: './pictures/Picture3.jpeg' },
      { picture: './pictures/Picture4.jpg' },
      { picture: './pictures/Picture5.jpg' },
      { picture: './pictures/Picture6.jpg' },
      { picture: './pictures/Picture7.jpg' },
      { picture: './pictures/Picture8.jpg' },
      { picture: './pictures/Picture9.jpg' },
      { picture: './pictures/Picture10.jpeg' },
      { picture: './pictures/Picture11.jpeg' },
    ]
  }

  const [picToDisplay, setPicToDisplay] = useState(gridElement().splice(0, 6))
  const itemsPerPage = 6
  const pageCount = Math.ceil(gridElement().length / itemsPerPage)

  const handlePageChange = (event, page) => {
    let firstIndex = 0
    let secondIndex = 6
    if (page > 1) {
      firstIndex = secondIndex * page - itemsPerPage
      secondIndex = secondIndex * page
    }
    setPicToDisplay(() => gridElement().splice(firstIndex, secondIndex))
  }

  return (
    <div className="gallery" id="gallery">
      <h1>
        <b>Gallery</b>
      </h1>
      <div className="gallery-container">
        <div className="itemsContainer">
          {picToDisplay.map((item) => (
            <div
              className="item"
              style={{ backgroundImage: `url(${item.picture})` }}
            ></div>
          ))}
        </div>
        <div className="pagination">
          <Pagination
            count={pageCount}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery
