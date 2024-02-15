

import Event from './Event'
import listevents from "../data/events.json"
import { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'

export default function Events (){


    const [showAlert, setshowAlert] = useState(false)
    const malert=()=>{
        setshowAlert(true);
        setTimeout(()=>{
            setshowAlert(false),3000
        })
    }

    const [showWelcome,setshowWelcome]= useState(false)


    useEffect(()=>{
        setshowWelcome(true);
        setTimeout(()=>setshowWelcome(false),3000);
    },[])


    return <>
    {showWelcome &&<Alert variant='success'>
          event booked
        </Alert> } 


        
    {showAlert &&   <Alert variant='success'>
          event booked
        </Alert>
    
    
    }
    <div className='row'>
    {

        listevents?.map((element,index)=>{
            
            return <Event className='col-md-4'  key={index} e={element}  fonctionalert={malert}></Event>
        })
    }
    </div>
    {showAlert &&   <Alert variant='success'>
          event booked
        </Alert>
    
    
    }
    </>
}