import React, { useEffect, useState } from 'react'
import { getJoke } from '../../services/chuckNorrisService'
import './joke.css'

const imageLink =
    'https://s3-alpha-sig.figma.com/img/3026/4564/4f10ac4b1398deb2ece123c9d8157c02?Expires=1630886400&Signature=aazz8hnMkxidL4DID3WrZTvnwUmtIpEJLZw8URMTXWB29qGmOm5mSpMkE318tZmm5oQ6MSoj6KC9ixbMWCMqI296fdQHdmCLmH9V1A0X2zhPrX3K0c9FmyjIck-yL76~K5UQlFNLO6DumuXuROMBJ9v63y5IkOG4k56GrMvhDugq1hc-~1cqGniycdtlxBFtxiD935-F2WtgBoJksH0bkM3HpSpir6tlXZ5PArnRDldsLHDIRSuaovGq6NzLCcXbxZVy7B6LDTS~0EI5NEoQq6~XT7P698M890zwr56rn6~P8eMMw31LycVO5vpWvbeTd5943MhysU06mo-IpdMv6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'

const Joke = ({ jokeCategory }) => {
    const initialState =
        'The only thing Chuck Norris says on a job interview: “Hi, I’m Chuck Norris and I start tomorrow. Any questions?'
    const [joke, setJoke] = useState(initialState)

    const fetchJoke = async () => {
        const newJoke = await getJoke(jokeCategory)
        setJoke(newJoke)
    }
    useEffect(() => {
        if (jokeCategory !== null) {
            fetchJoke()
        } else {
            setJoke(initialState)
        }
    }, [jokeCategory])

    return (
        <div className="joke-container">
            <img src={imageLink} alt="Chuck Norris" />
            <div className="joke-title-container">
                <div className="joke-title">{joke}</div>
            </div>
        </div>
    )
}
export { Joke }
