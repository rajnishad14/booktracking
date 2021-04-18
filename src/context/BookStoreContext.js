import React, { useEffect, useState } from 'react'

const BookContext = React.createContext()

const BookStoreContext = ({ children }) => {
  const [books, setBooks] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const fetchBooks = async () => {
    await fetch('data.json')
      .then((res) => res.json())
      .then((result) => setBooks(result))
  }
  useEffect(() => {
    fetchBooks()
  }, [])
  return (
    <BookContext.Provider value={{ books, openModal, closeModal, isModalOpen }}>
      {children}
    </BookContext.Provider>
  )
}

export { BookStoreContext, BookContext }
