import React, { useEffect, useState } from 'react';
import Event from './Event';
import { getallEvents } from '../service/api';
import { useSelector } from 'react-redux';


const Events = () => {

  const [bookAlert , setBookAlert] = useState(false);

  const [showWelcome, setShowWelcome] = useState(false); 
  const [ListEvent, setListEvent] = useState(null);

  useEffect(() => {
    setShowWelcome(true);
    setTimeout(() => {setShowWelcome(false);}, 3000);
    return () => {
      console.log('componentWillUnmount');
    }
  }, []);

  const fetchEvents = async () => {
    try {
      const events = await getallEvents();
      setListEvent(events.data);
      console.log(events.data);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    try {
      fetchEvents();
    } catch (error) {
      console.log(error);
    }
  }, []);




  const handleBookAlert = () => {
    setBookAlert(true);

    setTimeout(() => {
      setBookAlert(false);
    }, 3000);
  }




  return (
    
    <div className="row">
      
        {showWelcome && <div className="alert alert-success">Welcome to our events</div>}


            {ListEvent && ListEvent.map((event, index) => {
                return (
                   
                        <Event className="col-md-4" event={event}  key={index} bookAlert={handleBookAlert}/>
                    
                )
            }
      

            )}
            {bookAlert && <div className="alert alert-success">ticket booked !!</div>}
            
    </div>
  );
}
export default Events;