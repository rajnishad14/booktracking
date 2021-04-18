import { useState } from 'react'
import SideNavbar from './components/SideNavbar'
import BooksMain from './components/BooksMain'
import Modal from './components/Modal'

import './App.css'

function App() {
  const [view, setView] = useState('grid')
  const [modalVal, setModalVal] = useState({})
  const changeView = () => {
    if (view === 'grid') {
      setView('list')
    } else {
      setView('grid')
    }
  }
  const sendModalval = (val) => {
    setModalVal({ ...val })
  }
  return (
    <>
      <SideNavbar />
      <main>
        <nav>
          <div className="nav-center">
            <h2>Book Store...</h2>
            <button
              onClick={() => {
                changeView()
              }}
            >
              {view}
            </button>
          </div>
        </nav>
        <BooksMain sendModalval={sendModalval} />
        <Modal modalVal={{ ...modalVal }} />
      </main>
    </>
  )
}

export default App
