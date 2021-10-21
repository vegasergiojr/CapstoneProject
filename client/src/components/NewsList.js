import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import NewItem from './NewsItem';
import '../styles/news.css'


const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const results = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=6fde7a5e21474952a42e268cfa965144");

            //Updating the local state and setting up what data we want from the api
            setArticles(results.data.articles)

            console.log(results)
        }
        getArticles()
    }, [])
    return (
        <div id="displayNews"  >
            {articles.map(({ title, description, url, urlToImage }, index) => (
                <NewItem
                    key={index}
                    title={title}
                    description={description}
                    url={url}
                    urlToImage={urlToImage}
                />
            ))}
        </div>
    )
}

export default NewsList
