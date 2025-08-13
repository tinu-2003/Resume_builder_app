import React from 'react'
import Preview from '../components/Preview'
import Steps from '../components/Steps'

function UserForm() {
  return (
    <>
    <div className="container">
      <div className="row p-5">
        <div className="col-6">
         <Steps/>
        </div>
        <div className="col-6">
          <Preview/>
        </div>
      </div>
    </div>
      
      </>
  
  )
}

export default UserForm