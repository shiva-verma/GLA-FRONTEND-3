import React from 'react'

const Card = (props) => {
    
  return (
    <div>Card Component
        <h1>{props.data.name}</h1>
        <h3>{props.data.address}</h3>
        <h4>{props.data.age}</h4>
    </div>
  )
}

export default Card