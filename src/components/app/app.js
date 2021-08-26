import React, { useEffect, useState } from 'react'
import { Header } from '../header/header'
import { getCategories } from '../../services/chuckNorrisService'
import { CategoriesList } from '../categories-list/categories-list'
import './app.css'
import { Joke } from '../joke/joke'

const App = () => {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectCategory] = useState(null)

    const fetchCategories = async () => {
        const fetchedCategories = await getCategories()
        setCategories(fetchedCategories)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const osSelectCategory = (category) => {
        if (selectedCategory !== category) {
            setSelectCategory(category)
        } else {
            setSelectCategory(null)
        }
    }

    return (
        <div>
            <Header />
            <div className="content-container">
                <CategoriesList
                    categories={categories}
                    onCategoryClick={osSelectCategory}
                    activeCategory={selectedCategory}
                />
                <Joke jokeCategory={selectedCategory} />
            </div>
        </div>
    )
}
export { App }
