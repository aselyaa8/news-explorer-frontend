import React from 'react';
import './ErrorNewsApi.css';

function ErrorNewsApi() {
  return (
    <section className="error-news">
      <p className="error-news__text"> Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later. </p>
    </section>
  );
}

export default ErrorNewsApi;
