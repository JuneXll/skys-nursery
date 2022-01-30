import React from 'react';

const logo = 'https://ik.imagekit.io/diversifiedtax/Sky_s_Nursery/EggwhiteT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642455514118'

const Footer = () => {
    return(
        <div className='footer d-flex justify-content-between'>
            <small>Copyright ©2021 Sky's Plant Nursery</small>
            <a href='#home'>
                <img src={logo} className="nav-logo" alt="Sky's Plant Nursery Logo"></img>
            </a>
            
        </div>
    )
}

export default Footer;