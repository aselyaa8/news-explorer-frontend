import React from 'react';
import './Footer.css';
import github from '../../images/github.png';
import fb from '../../images/fb.png'
function Footer() {
    return (
         <footer className="footer">
            <p className="footer__copyright">&#169;2021 Supersite, Powered by News API</p>
            <div className='footer__lists'>
            <ul className= "footer__nav-list">
                <li className= "footer__nav-list-item">Home</li>
                <li className= "footer__nav-list-item">Practicum By Yandex</li>
            </ul>
            <ul className= "footer__social-list">
                <li className="footer__social-list-item"><a href="https://github.com/aselyaa8"><img alt ="github icon" src = {github}/></a></li>
                <li className="footer__social-list-item"><a href="https://www.facebook.com/profile.php?id=100004822028587"><img  alt ="facebook icon" src = {fb} /></a></li>
            </ul>
            </div>
       </footer>
    );
}

export default Footer;