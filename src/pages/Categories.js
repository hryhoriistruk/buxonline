import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const apiUrl = 'https://api-dev.buxonline.org/api/v1/category/list/'

function Categories() {
  const [categories, setCategories] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}?page=${currentPage}`)
        setCategories(response.data.results)
        setTotalPages(response.data.total_pages)
        setLoading(false)
      } catch (error) {
        console.error('Ошибка при запросе:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [currentPage])

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="s-70"></div>
      <h3 className="title-part mx-3">Категории</h3>
      <div className="s-50"></div>
      <div className="w-100 tc">
        {categories.map((el) => (
          <Link to={`/categories/${el.role}`} className='button cat m-1' key={el.id}>{el.role}</Link>
        ))}
      </div>
      <div className="s-100"></div>
      <div className='flex w-80 ma pb-5 jcc aic'>
        <button onClick={handlePrevPage} disabled={currentPage === 1} className='button'>Назад</button>
        <span className='px-4'>Сторiнка {currentPage} з {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className='button'>Вперед</button>
      </div>
      <div className="s-100"></div>
    </>
  )
}

export { Categories }
