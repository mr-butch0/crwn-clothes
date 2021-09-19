 import React from 'react'
 import './menu-item.styles.scss'
 
 const MenuItem = ({title, imgUrl, size}) => (
        <div className={`${size ? size : ''} menu-item`}>
            <div className="menu-item__background-image" style={{ backgroundImage:`url(${imgUrl})`}}></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
 );

 export default React.memo(MenuItem);