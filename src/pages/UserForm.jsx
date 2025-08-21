import React from 'react'
import Preview from '../components/Preview'
import Steps from '../components/Steps'

function UserForm() {
   //state for storing user input data
  const [userInput, setUserInput] = React.useState({
  personelData:{
  name:'',
  job:'',
  location:'',
  email:'',
  phone:'',
  github:'',
  linkedin:'',
  portfolio:''
  },
  education:{
    course:'',
    college:'',
    university:'',
    year:'',
  },
  experience:{
    jobRole:'',
    company:'',
    jobLocation:'',
    duration:''
  },
  skills:[],
  summary:''
  })

  return (
    <>
    <div className="container">
      <div className="row p-5">
        <div className="col-lg-6">
         <Steps />
        </div>
        <div className="col-lg-6 ">
          <Preview userInput={userInput}/>
        </div>
      </div>
    </div>
      
      </>
  
  )
}

export default UserForm