import Card from 'react-bootstrap/Card';
const cardItem = (props) => {
    
    return(
        <>
            <Card style={{ width: '50px', height:'50px' }}>
                <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.category} - Price: {props.price && <p>{props.price}</p>} 
                </Card.Text>
            </Card.Body>
            </Card>
        </>
    )
}
export default cardItem;