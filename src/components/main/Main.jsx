import { useState } from "react";
import Card from "../card/Card.jsx"
import cardsData from "../../data/cardsData.js";

const Main = () =>{
    const [data, setData] = useState(cardsData)
    const handleAddCard = ()=>{
        setData(current => [...current,     {
            title: 'title card 4',
            description: 'Lorem ipsum dolor sit amet',
            price: 130,
            img: 'https://picsum.photos/200/300'
        }])
    }
    return(
        <>
            {cardsData.map((card)=>{
                return(
                    <Card
                        title = {card.title}
                        description = {card.description}
                        price = {card.price}
                        img= {card.img}
                    />
                )
            })}
            <button onClick={handleAddCard}>Aggiungi</button>           
        </>
    )
}
export default Main;