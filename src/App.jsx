
import { Route, Routes } from 'react-router-dom'
import './App.css'


import React, { Suspense } from 'react'




const Events = React.lazy(()=>import('./Composants/Events'))
const EventDetails = React.lazy(()=>import('./Composants/EventDetails'))
const Notfound = React.lazy(()=>import('./Composants/notfound'))


function App() {

  return (
    <>
    <Suspense>
   <Routes>
    <Route  path='/events' >
    <Route index element={<Events/>} />
    </Route>


  



    <Route path='*'>

    <Route index element={<Notfound/>} />
    </Route>
    

    <Route path='/details/:name'>
<Route index element={<EventDetails/>} />

</Route>
   </Routes>



  </Suspense> 


  
    </>
  )
}

export default App
