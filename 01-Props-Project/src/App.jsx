
import Card from './components/Card'

function App() {
  const jobOpening = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKcurdeWAYH2c4G5Faac63VipIC600Wi-j2sBnHvOWSvnR9gTZdUbA0M&s=10",
    companyName: "Google",
    date: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Karachi, Pakistan",
  },
  {
    brandLogo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1",
    companyName: "Microsoft",
    date: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Remote",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpqIluoF13WK8lbYHRs08Ly6PQ6WnWWK2DBaxb9fDlw&s",
    companyName: "Amazon",
    date: "1 week ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Karachi, Pakistan",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTH1ZivwhBbrv5N8ojOBCm7ZLstCa2tgxv70FJDUkRmQ&s",
    companyName: "Apple",
    date: "2 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hour",
    location: "Remote",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzChlzw4_AmFlEk86g0TiPq7s9vBGzBlpw7N6U6Dp-muzJ4FH9Dm3Ee0&s=10",
    companyName: "Meta",
    date: "6 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Remote",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CiF-KGPiLINlCRfZGrao-9iQsbcXvnEkHL4dEnTFCeXDV43Jctjd6VOj&s=10",
    companyName: "Netflix",
    date: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Los Angeles, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS85n77QiM6FSEf8UQ03Vt6uWR6ajRhkPsvDt8IOE3SKAWGHp91_--dew&s=10",
    companyName: "NVIDIA",
    date: "4 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "Remote",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYA1WenPdYSsIEjxdyJdKceHc4kkKbJzWIRI1cl0lkuWCByKQMiwWAprQ&s=10",
    companyName: "Adobe",
    date: "1 week ago",
    post: "Frontend Developer Intern",
    tag1: "Part Time",
    tag2: "Entry Level",
    pay: "$25/hour",
    location: "Remote",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/IBM_logo_in.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    companyName: "IBM",
    date: "3 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Karachi, Pakistan",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuAZDSGKHBueHRBN7KFn6CVeqiAR2-eEFqn7V9ed35w&s",
    companyName: "OpenAI",
    date: "2 weeks ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "San Francisco, USA",
  },
];
console.log(jobOpening);

  return (
    <div className='parent'>
     {jobOpening.map(function(ele,idx){
       
       return <div key={idx}>
            <Card  company={ele.companyName} post={ele.post} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} brandLogo={ele.brandLogo} date={ele.date}/>
       </div>
     })}
    </div>
  )
}

export default App