import React from 'react'

function Card() {
  return (
      <div className="card">
       <div>
         <div className="top">
          <img src="https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/amazon-logo-history-and-more/2000-Present-Logo-B.png" alt="" />
          <button>Save <Bookmark size={12} /></button>
        </div>
        <div className="center">
          <h3>Amzon <span>5 day ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
        <div className='tag'>
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>
         </div>
       </div>
        <div className="bottom">
            <div>
              <h3>$40/hr</h3>
              <p>Karachi, Pakistan</p>
            </div>
            <button>Apply Now</button>
        </div>

      </div>
  )
}

export default Card