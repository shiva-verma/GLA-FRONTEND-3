const Card = (props) =>{
    console.log(props.person)
    return (
        <div>
        <h1>{props.person.name}</h1>
        <h3>{props.person.age}</h3>
        <h3>{props.person.Address}</h3>
        </div>
    )
}

export default Card;