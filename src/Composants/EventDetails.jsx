import { useParams } from "react-router-dom"
import events from "../data/events.json"

export default function EventDetails(props){




    const {name} = useParams();
    
    const event = events.find((e)=>e.name===name)
    console.log(event)

    return(<>
    
    <p>{event.name} </p>
<p>{event.description}</p>    
    
    </>



    )


}