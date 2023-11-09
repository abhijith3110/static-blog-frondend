import React from 'react'
import "./Footer.css";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='fotter-btn'>
                <button className='pre-btn'>Previous</button>
                <button className='nxt-btn'>Next<span class="material-symbols-outlined">
                    double_arrow
                </span></button>
            </div>
            <div className='footer-link'>
                <h5>Powered by</h5>
                <a href='https://www.w3schools.com/w3css/tryw3css_templates_blog.htm'>w3.css</a>
            </div>
        </div>
    )
}

export default Footer