import React from 'react'
import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'

function App() {
  const users=[
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1652819674544-a284366b1d0d?q=80&w=753&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'Underbanked'
    },
  ]
  return (
    <div>
      <Section1 users={users}/>
    <Section2/>
    </div>
  )
}

export default App