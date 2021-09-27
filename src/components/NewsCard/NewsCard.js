import React, {useState} from 'react';
import './NewsCard.css';
import img from '../../images/img.jpg'
import { useLocation} from 'react-router-dom';
function NewsCard(props) {
    const location = useLocation();
    let mainPath = location.pathname === '/';
    const [isHovered, setIsHovered] = useState(false)

    return (
    <div className="news-card">
         <img src={img} alt="phone" className="news-card__img" />
         <p className="news-card__date">November 4, 2020</p>
         <h2 className="news-card__title">Everyone Needs a Special 'Sit Spot' in Nature</h2>
         <p className="news-card__text">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...</p>
         <p className="news-card__source">treehugger</p>
         {props.children}
         {isHovered && <p className="news-card__hover-text">{ mainPath ? 'Sign in to save articles' : 'Remove from saved'}</p>}
         <button onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}} className={mainPath ? "news-card__button-save" : "news-card__button-delete"}></button>
    </div>
    );
}

export default NewsCard;