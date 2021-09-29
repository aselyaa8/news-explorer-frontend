import React from 'react';
import './NewsCardList.css';

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
