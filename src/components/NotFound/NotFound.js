import React from 'react';
import './NotFound.css';
import notFoundIcon from '../../images/not-found-icon.svg'

function NotFound() {
    return (
        <section className="notfound">
          <img className="notfound__img" alt ="Not found icon" src = {notFoundIcon}/>  
          <h2 className="notfound__title"> Nothing found</h2>
          <p className="notfound__text"> Sorry, but nothing matched your search terms. </p>
        </section>
    );
}

export default NotFound;