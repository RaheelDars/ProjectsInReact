import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page1Conttext() {
  return (
    <div className='py-10 flex items-center gap-10  h-[90vh] bg-amber-950 px-18 '>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Conttext