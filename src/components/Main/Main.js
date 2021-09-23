import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './Main.css';
import About from '../About/About'
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

function Main() {
    return (
    <main className="main">
        <Preloader />
        <NotFound />
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