import React from 'react';
import './NewsCardList.css';
import PropTypes from 'prop-types';

NewsCardList.propTypes = {
  children: PropTypes.any
};

function NewsCardList(props) {
  return (
    <ul className="news-card-list">
      {props.children}
    </ul>
  );
}

export default NewsCardList;
