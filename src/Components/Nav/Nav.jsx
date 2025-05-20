import { useEffect, useState } from 'react'

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className='container py-2 d-flex justify-content-between align-items-center'>
        <div className='nav-social d-flex'>
          <a href='#' className='social-icon text-primary'>
            <i className='bi bi-facebook'></i>
          </a>
          <a href='#' className='social-icon text-info'>
            <i className='bi bi-twitter'></i>
          </a>
          <a href='#' className='social-icon text-danger'>
            <i className='bi bi-instagram'></i>
          </a>
          <a href='#' className='social-icon text-primary'>
            <i className='bi bi-linkedin'></i>
          </a>
          <a href='#' className='social-icon text-danger'>
            <i className='bi bi-pinterest'></i>
          </a>
        </div>
        <div className='navbar-brand mx-auto logo d-flex align-items-center'>
          <h2>
            <span>
              <span>Blog</span>Spot
            </span>
          </h2>
        </div>
        <div className='nav-btn-wrap d-flex align-items-center'>
          <button className='btn btn-primary me-2'>Subscribe</button>
          <a
            href='#'
            className='social-icon border d-flex align-items-center justify-content-center'
          >
            <i className='bi bi-pinterest'></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Nav
