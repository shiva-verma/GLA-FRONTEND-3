import React from 'react'
import './Card.css'

const Card = (props) => {
    
  return (
    <div>Card Component
        <h1 style={{color:"red"}}>{props.data.name}</h1>
        <h3>{props.data.address}</h3>
        <h4>{props.data.age}</h4>
    </div>
  )
}

export default Card