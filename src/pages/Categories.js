import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const apiUrl = 'https://api-dev.buxonline.org/api/v1/category/list/'

function Categories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

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
      <h3 className="title-part mx-3">Категории</h3>
      <div className="s-50"></div>
      <div className="w-100 tc">
        {categories.map((el) => (
          <Link to={`/categories/${el.role}`} className='button cat m-1' key={el.id}>
            {el.role}
          </Link>
        ))}
      </div>
      <div className="s-100"></div>
      <div className="s-100"></div>
    </>
  )
}

export { Categories }
