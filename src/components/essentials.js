import React from 'react'
import { Link } from 'react-router-dom'

const Essentials = () => {
    return (
        <div className="essentials">
            <i className="fas fa-border-all"></i>
            <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
        </div>
    )
}

export default Essentials