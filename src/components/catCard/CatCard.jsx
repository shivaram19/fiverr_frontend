import React from 'react'
import './CatCard.scss'
import { Link } from 'react-router-dom'

const catCard = ({ item }) => {
  return (
    <div className='catCard'>
      <Link to={"/gigs/12"} className='link'>
        
          <img src={item.img} alt="" />
          <span className="desc">{item.desc}</span>
          <span className="title">{item.title}</span>
        
      </Link>
    </div>
  )
}

export default catCard

      
