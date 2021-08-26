import React from 'react'
import './header.css'

const headerImgLink =
    'https://assets.chucknorris.host/img/avatar/chuck-norris.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <img src={headerImgLink} alt="Header icon" />
                <span>Chuck Norris</span>
            </div>
        </div>
    )
}
export { Header }
