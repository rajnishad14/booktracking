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
            <img src={img} alt="" />
            <h4>{title}</h4>
            <p>{authour}</p>
            <p>{genre}</p>
          </article>
        )
      })}
    </div>
  )
}

export default BooksMain
