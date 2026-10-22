import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl gap-5 overflow-x-auto flex flex-nowrap p-6 w-2/3'>
       {props.users.map(function(ele,idx){
        return <RightCard key={idx} id={idx} img={ele.img} tag={ele.tag}/>
       })}
        
    </div>
  )
}

export default RightContent