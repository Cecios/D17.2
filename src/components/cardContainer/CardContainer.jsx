import Card from "../card/Card";
import arrayFantasy from '../../data/fantasy'
import { Row} from "react-bootstrap";
const CardContainer = () => {
    return (
        <>
            <Row>
            {arrayFantasy.map((element)=>{
                    return (
                        <div className="col-3">
                        <Card
                            title = {element.title}
                            img = {element.img}
                            category={element.category}
                            price ={element.price}
                        />
                        </div>
                    )
                })}
            </Row>

        </>
    )
}
export default CardContainer;