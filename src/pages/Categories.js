import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const apiUrl = 'https://api-dev.buxonline.org/api/v1/category/list/'



function Categories() {

  const [language, setLanguage] = useState(localStorage.getItem('language') || 'uk')

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategoryName, setSelectedCategoryName] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl)
        setCategories(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Ошибка при запросе:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])



  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="s-70"></div>
      <h3 className="title-part mx-3">Категорії</h3>
      <div className="s-20"></div>
      <div className="w-100">
        {categories.map((el) => (
          <Link
            onClick={() => {
              setSelectedCategoryName(el.role)
              setSelectedCategoryName(el.role)
              setLanguage(language)
            }}
            to={`/category/${el.id}/${el.role}/${language}`}
            className={`button cat jcsb aic py-1 px-3 m-1 ${selectedCategoryName === el.role ? 'active' : ''}`}
            key={el.id}
          >
            <span className="fz-14">{el.role}</span><span className="fz-14">{el.vacancies_count}</span>
          </Link>
        ))}
      </div>
      <div className="s-100"></div>
      <div className="s-100"></div>
    </>
  )
}

export { Categories }
