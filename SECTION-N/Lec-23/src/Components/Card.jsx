import "./Card.css"

const Card = ({person}) =>{
    // console.log(props)
    return (
        <div>
            <h1>{person.name}</h1>
            <h2>{person.Address}</h2>
            <h3>{person.age}</h3>
        </div>
    )
}

export default Card;