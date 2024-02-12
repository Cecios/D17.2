
const Card = (props) => {
    
    return(
        <>
                    <div>
                        <h1>{props.title}</h1>
                        <img src={props.img} alt="img"/>
                        <p>{props.description}</p>
                        {props.price && <p>{props.price}</p>}     {/* rendering condizionale */}
                      
                    </div>
        </>
    )
}
export default Card;