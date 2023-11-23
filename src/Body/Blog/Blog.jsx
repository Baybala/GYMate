import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLayerGroup,
  faArrowRightLong,
  faSearch,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import './Blog.css'

const Blog = () => {
  const blogs = (picURL, headText, someText) => {
    return (
      <>
        <div
          className="bgPicture"
          style={{ backgroundImage: `url(${picURL})` }}
        ></div>
        <p>
          <FontAwesomeIcon style={{ color: 'red' }} icon={faLayerGroup} /> By{' '}
          <b>Admin</b> | March 11, 2022 | Yoga
        </p>
        <h1>
          <b>{headText}</b>
        </h1>
        <p style={{ fontSize: '16px' }}>{someText}</p>
        <button className="purchaseButton">
          <b>
            PURCHASE NOW
            <FontAwesomeIcon
              style={{ paddingLeft: '8px' }}
              icon={faArrowRightLong}
            />
          </b>
        </button>
      </>
    )
  }

  const categoryItem = (text, number) => {
    return (
      <div className="catigories-item">
        <p className="chevronRight">
          <FontAwesomeIcon icon={faChevronRight} />
        </p>
        <p>{text}</p>
        <p>{`(${number})`}</p>
      </div>
    )
  }

  const headerStyle = (header) => {
    return (
      <h3>
        <b>{header}</b>
      </h3>
    )
  }

  const postItems = (imgURL, post) => {
    return (
      <div className="posts">
        <div
          className="post-img"
          style={{ backgroundImage: `url(${imgURL})` }}
        ></div>
        <div className="post">
          <h5>March 22, 2022</h5>
          <h3>
            <b>{post}</b>
          </h3>
        </div>
      </div>
    )
  }

  return (
    <div className="blog" id="blog">
      <h1 className="blog-header">
        <b>Blog</b>
      </h1>
      <div className="blog-container">
        <div className="blog-left-column">
          {blogs(
            './pictures/Picture12.jpg',
            'Yoga For Everyone in 2022',
            'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
          )}
          {blogs(
            './pictures/Picture13.jpg',
            'Yoga For Everyone in 2022',
            'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
          )}
          {blogs(
            './pictures/Picture14.jpg',
            'Yoga For Everyone in 2022',
            'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
          )}
          {blogs(
            './pictures/Picture15.jpg',
            'Yoga For Everyone in 2022',
            'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
          )}
          {blogs(
            './pictures/Picture16.jpg',
            'Yoga For Everyone in 2022',
            'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
          )}
          {blogs(
            './pictures/Picture17.jpg',
            'Yoga For Everyone in 2022',
            'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
          )}
          {blogs(
            './pictures/Picture18.jpg',
            'Yoga For Everyone in 2022',
            'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
          )}
        </div>
        <div className="blog-right-column">
          <div className="search-container">
            <form className="searchField">
              <label htmlFor="blogSearch" />
              <input
                type="text"
                id="blogSearch"
                name="height/cm"
                placeholder="Search..."
              />
            </form>
            <button className="searchButton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="catigories-container">
            {headerStyle('Categories')}
            {categoryItem('Body Building', '4')}
            {categoryItem('Boxing', '4')}
            {categoryItem('Crossfit', '4')}
            {categoryItem('Fitness', '4')}
            {categoryItem('Meditation', '4')}
            {categoryItem('Yoga', '4')}
          </div>
          <div className="posts-container">
            {headerStyle('Recent Posts')}
            {postItems('./pictures/Picture12.jpg', 'Yoga For Everyone in 2022')}
            {postItems(
              './pictures/Picture13.jpg',
              'Getting Back Into CrossFit',
            )}
            {postItems(
              './pictures/Picture14.jpg',
              'Meet Fitness Abassador Grace',
            )}
            {postItems(
              './pictures/Picture15.jpg',
              'The best are European Meditation Practitioner',
            )}
            {postItems(
              './pictures/Picture16.jpg',
              'Learn Boxing With Our Trainer John',
            )}
            {postItems(
              './pictures/Picture17.jpg',
              'How To Get Lean For The Summer',
            )}
          </div>
          <div className="popularTags-container">
            {headerStyle('Popular Tags')}
            <div className="tag">
              <p>#Crossfit</p>
              <p>#Fitness</p>
              <p>#Gym</p>
              <p>#Meditation</p>
              <p>#Running</p>
              <p>#Workout</p>
              <p>#Yoga</p>
              <p>#Boxing</p>
            </div>
          </div>

          <div className="discount-container">
            <div>
              <h1>
                <b>GYMAT</b>
              </h1>
              <p>
                <b>
                  <span style={{ fontSize: '70px' }}>34%</span>
                </b>
                <br />
                Flat Discount
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
