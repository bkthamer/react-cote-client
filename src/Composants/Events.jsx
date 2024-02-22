

import Event from './Event'
import listevents from "../data/events.json"
import { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useParams, useSearchParams } from 'react-router-dom'
import NavBar from './NavBar'

export default function Events (){

    const {id}=useParams();
    console.log(id);
    const  [name , Setname] = useSearchParams({name:""})

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
    <NavBar></NavBar>
    {showWelcome &&<Alert variant='success'>
          event booked
        </Alert> } 

        <p>name {name}</p>
        <p>id {id}</p>


        
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