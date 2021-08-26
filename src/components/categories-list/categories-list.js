import React from 'react'
import './categories-list.scss'

const CategoriesList = ({ categories, onCategoryClick, activeCategory }) => {
    return (
        <div className="categories">
            <h2 className="categories-title">Categories</h2>
            <div className="categories-container">
                {categories.map((category) => {
                    return (
                        <div
                            className={
                                category !== activeCategory
                                    ? `categories-list-item`
                                    : `categories-list-item-active`
                            }
                            key={category}
                            onClick={() => onCategoryClick(category)}
                        >
                            <span>{category}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export { CategoriesList }
