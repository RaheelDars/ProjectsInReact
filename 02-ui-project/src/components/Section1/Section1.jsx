import React from 'react'
import Navbar from './Navbar'
import Page1Conttext from './Page1Conttext'

function  Section1(props) {

  return (
    <div className='h-screen w-full '>
        <Navbar/>
        <Page1Conttext users={props.users}/>
    </div>
  )
}

export default Section1