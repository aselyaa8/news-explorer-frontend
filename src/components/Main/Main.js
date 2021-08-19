import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './Main.css';
import About from '../About/About'

function Main() {
    return (
    <main className="main">
        <section className="search-results">
            <h2 className="search-results__title">Search results</h2>
        <NewsCardList/>
        <button className="search-results__button">Show more </button>
        </section>
        <About/>
    </main>
    );
}

export default Main;