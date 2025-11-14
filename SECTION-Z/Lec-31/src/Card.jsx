import React from 'react'

const Card = (props) => {
    console.log(props.product)
  return (
    <div>
        <div className="card" style={{width:"18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.description}</p>
                <a href="#" className="btn btn-primary">{props.product.price}</a>
            </div>
            </div>
        </div>
  )
}

export default Card