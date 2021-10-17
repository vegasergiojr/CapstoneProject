import React from 'react'
import '../styles/NewsItems.css'

const NewItem = ({ title, description, url, urlToImage, publishedAt }) => {
    return (
        <div className="news-container">
            <div className="news-post">
                <img className="news-image" src={urlToImage} />
                <h3 className="news-title"><a className="news-anchor" href={url}>{title}</a></h3>
                <p className="news-content">{description}</p>
                <p >Posted : {publishedAt}</p>
            </div>
        </div>

    )
}

export default NewItem
