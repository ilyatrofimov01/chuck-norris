import React, { useEffect, useState } from 'react'
import { Header } from '../header/header'
import { getCategories } from '../../services/chuckNorrisService'
import { CategoriesList } from '../categories-list/categories-list'
import { getJoke } from '../../services/chuckNorrisService'
import './app.css'
import { Joke } from '../joke/joke'

const initialJoke =
    'The only thing Chuck Norris says on a job interview: “Hi, I’m Chuck Norris and I start tomorrow. Any questions?'

const App = () => {
    const [categories, setCategories] = useState([])
    const [joke, setJoke] = useState(initialJoke)

    const fetchCategories = async () => {
        const fetchedCategories = await getCategories()
        setCategories(fetchedCategories)
    }
    const fetchJoke = async (category) => {
        const newJoke = await getJoke(category)
        setJoke(newJoke)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const onSelectCategory = (category) => {
        fetchJoke(category)
    }

    return (
        <div>
            <Header />
            <div className="content-container">
                <CategoriesList
                    categories={categories}
                    onCategoryClick={onSelectCategory}
                />
                <Joke joke={joke} />
            </div>
        </div>
    )
}
export { App }
