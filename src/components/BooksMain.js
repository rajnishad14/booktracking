import React, { useContext } from 'react'
import { BookContext } from '../context/BookStoreContext'

const BooksMain = ({ sendModalval, view }) => {
  const { filterBooks, openModal } = useContext(BookContext)
  const handleClick = (val) => {
    sendModalval({ ...val })
    openModal()
  }
  return (
    <div className="books-main">
      {filterBooks.map((book) => {
        const { id, authour, genre, img, discription, title } = book
        if (view === 'grid') {
          return (
            <article
              key={id}
              onClick={() => {
                handleClick({ authour, genre, img, discription, title })
              }}
            >
              <div className="img-container">
                <img src={img} alt="" />
                <p className="bottom-right">{genre}</p>
              </div>
              <h4>{title}</h4>
              <p>{authour}</p>
            </article>
          )
        }
        return (
          <section
            key={id}
            key={id}
            onClick={() => {
              handleClick({ authour, genre, img, discription, title })
            }}
          >
            <h4>Title: {title}</h4>
            <p>Authour: {authour}</p>
            <p>Genre: {genre}</p>
          </section>
        )
      })}
    </div>
  )
}

export default BooksMain
