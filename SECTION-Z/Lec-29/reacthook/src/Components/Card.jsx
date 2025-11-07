import React from 'react'

const Card = (props) => {
    
  return (
    <div>
        <div
  className="card"
  style={{
    width: "18rem",
  }}>
  <img alt="..." className="card-img-top" src="..." />
  <div className="card-body">
    <h5 className="card-title">{props.data}</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card’s content.
    </p>
    <a className="btn btn-primary" href="#">
      Go somewhere
    </a>
  </div>
</div>
    </div>
  )
}

export default Card