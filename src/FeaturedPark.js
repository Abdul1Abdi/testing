

const FeaturedPark = (props) => {
    return (
        <div>
            <h2>This week's featured park is {props.parkName}</h2>
            <button onClick={ () => props.bulldozer(props.parkName)}>Not this park!</button>
        </div>
    )
}

export default FeaturedPark;