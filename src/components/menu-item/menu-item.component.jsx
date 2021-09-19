 import React from 'react'
 import './menu-item.styles.scss'
 
 const MenuItem = ({title, imgUrl, size}) => (
        <div className={`${size ? size : ''} menu-item`} style={{ backgroundImage:`url(${imgUrl})`}}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
 );

 export default React.memo(MenuItem);