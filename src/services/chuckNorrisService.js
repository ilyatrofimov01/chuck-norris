import axios from 'axios'
const url = 'https://api.chucknorris.io/jokes'

export const getCategories = async () => {
    const response = await axios.get(`${url}/categories`)
    return response.data
}

export const getJoke = async (category) => {
    const response = await axios.get(`${url}//random?category=${category}`)
    return response.data.value
}
