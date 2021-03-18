import React from 'react'
import Contact from './Contact/Contact'

import './Footer.scss'
import Info from './Info/Info'

const Footer = () => {
    return (
        <div className="footer">
            <Info />
            <Contact />
        </div>
    )
}

export default Footer
