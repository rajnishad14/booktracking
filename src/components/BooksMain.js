import React, { useContext } from 'react'
import { BookContext } from '../context/BookStoreContext'

const BooksMain = ({ sendModalval }) => {
  const { books, openModal } = useContext(BookContext)
  const handleClick = (val) => {
    sendModalval({ ...val })
    openModal()
  }
  return (
    <div className="books-main">
      {books.map((book) => {
        const { id, authour, genre, img, discription, title } = book
        return (
          <article
            key={id}
            onClick={() => {
              handleClick({ authour, genre, img, discription, title })
            }}
          >
            <div className="img-container">
              <img src={img} />
              <p className="bottom-right">{genre}</p>
            </div>
            <h4>{title}</h4>
            <p>{authour}</p>
          </article>
        )
      })}
    </div>
  )
}

export default BooksMain
