import React from 'react'
import "./HomeContent.css"
import myImg from "./img/IMG_0921.JPG"
import "@fortawesome/fontawesome-free/css/all.min.css";

function HomeContent() {
  return (
    <div className='HomeContent'>
        <div className='topContent'>
            <div>
            <h2>Hi I'm Dev Solary</h2>
            <span>A Developer & Computer Engineering Student</span></div>
            <img src={myImg} alt="Dev solary" />
        </div>
        <div className='myLinks'>
            <p>My Links:</p>
            <ul>
                <li><a href="https://twitter.com/devsolary/" target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://instagram.com/devsolary" target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/
devsolary" target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-linkedin"></i></a></li>
                
                <li><a href="https://wa.link/l59p25" target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-whatsapp"></i></a></li>
                <li><a href="https://www.youtube.com/@Devsolary" target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-youtube"></i></a></li>
            </ul>
        </div>
    </div>
  )
}

export default HomeContent