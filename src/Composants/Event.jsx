import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Event (props){

    const [e,SetEvent]= useState(props.e)
    const bookevent=()=>{
       

        console.log("buy ticket", e);
    

        SetEvent({
          ...e,
          nbTickets:e.nbTickets-1,
            nbParticipants:e.nbParticipants+1
        });

        props.fonctionalert()
    }


    const like =()=>{
        SetEvent({
            ...e,
            like:!e.like
          
          });
    }

    

    return <>    
     <Card  style={{ width: '18rem' }}>
    <Card.Img variant="top" src={e.nbTickets===0 ? "images/sold_out.png": `images/${e.img}`} />
    <Card.Body>

      <Link to={ `/details/${e.name}`}>
      <Card.Title>{e.name}</Card.Title>
      </Link>
      <Card.Text>
      {e.price}
      <br></br>
      {e.nbTickets}
      <br></br>
      {e.nbParticipants}
      </Card.Text>
      <Button variant="primary" onClick={()=>bookevent()}  disabled={e.nbTickets===0 ? true : false }>book a ticket</Button>
      <Button variant="danger" onClick={()=>like()}  >{e.like? 'like' : 'dislike'}</Button>
    </Card.Body>
  </Card>
     </>
}