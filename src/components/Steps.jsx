import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const steps = ['Basic Information', 'Contact Details', 'Education Details' , 'Work Experince' ,'Skills & Certifications','Review & Submit   '];

function Steps({}) {

  const skillSuggectionArray=['Node JS','Express','MongoDB','React','Css','Angular','Bootstrap','GIT','javaScript']
   const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
 //state for storing user input data
const [userInput, setUserInput] = React.useState({
personelData:{
name:'',
jobTitle:'',
location:'',
email:'',
phone:'',
github:'',
linkedin:'',
portfolio:''
},
education:{
  course:'',
  collage:'',
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
console.log(userInput);

// const userSkillRef = React.


    const isStepOptional = (step) => {
    return step === 1;
  };

   const isStepSkipped = (step) => {
    return skipped.has(step);
  };

    const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

   const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

   const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

   const handleReset = () => {
    setActiveStep(0);
  };

  const addSkill =(inputSkill)=>{
    if(inputSkill){
if(userInput.skills.includes(inputSkill)){
      alert("inputed skill is already existing !! add another..")
    }
    else{
 userInput.skills.push(inputSkill)
    }
  }
    }
    
// rednder the content corresponding to array index
    
const renderStepArrayContent = (stepCount)=>{
  
    switch(stepCount){
      case 0 :return(
        <div>
          <h3>Personal Details</h3>
          <div className="d flex row p-3">
            <TextField id="standard-basic-name" label="Full-Name" variant="standard" onChange={e=>setUserInput({...userInput,personelData:{...userInput.personelData,name:e.target.value}})} />
            <TextField id="standard-basic-job" label="Job-title" variant="standard" onChange={e=>setUserInput({...userInput,personelData:{...userInput.personelData,jobTitle:e.target.value}})}/>
            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e=>setUserInput({...userInput,personelData:{...userInput.personelData,location:e.target.value}})}/>
          </div>
        </div>
      )
   case 1 :return(
        <div>
          <h3>Contact Details</h3>
          <div className="d flex row p-3">
            <TextField id="standard-basic-email" label="Email" variant="standard"onChange={e=>setUserInput({...userInput,personelData:{...userInput.personelData,email:e.target.value}})} />
            <TextField id="standard-basic-phone" label="Phone-No" variant="standard"onChange={e=>setUserInput({...userInput,personelData:{...userInput.personelData,phone:e.target.value}})} />
            <TextField id="standard-basic-github" label="GitHub Link" variant="standard"onChange={e=>setUserInput({...userInput,personelData:{...userInput.personelData,github:e.target.value}})} />
            <TextField id="standard-basic-linkedin" label="Linkedin Link" variant="standard"onChange={e=>setUserInput({...userInput,personelData:{...userInput.personelData,linkedin:e.target.value}})} />
            <TextField id="standard-basic-porttfolio" label="Portfolio Link" variant="standard" onChange={e=>setUserInput({...userInput,personelData:{...userInput.personelData,portfolio:e.target.value}})} />
          </div>
        </div>
      )

      case 2 :return(
        <div>
          <h3>Education Details</h3>
          <div className="d flex row p-3">
            <TextField id="standard-basic-course" label="Cours-Name" variant="standard"onChange={e=>setUserInput({...userInput,education:{...userInput.education,course:e.target.value}})}  />
            <TextField id="standard-basic-collage" label="Collage-Name" variant="standard"onChange={e=>setUserInput({...userInput,education:{...userInput.education,collage:e.target.value}})}  />
            <TextField id="standard-basic-university" label="University-Name" variant="standard"onChange={e=>setUserInput({...userInput,education:{...userInput.education,university:e.target.value}})}  />
            <TextField id="standard-basic-passingout" label="Year of Passing-Out" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,year:e.target.value}})} />
          </div>
        </div>
      )
      case 3 :return(
        <div>
          <h3>Professional  Details</h3>
          <div className="d flex row p-3">
            <TextField id="standard-basic-role" label="Job Or Internship" variant="standard"onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,jobRole:e.target.value}})} />
            <TextField id="standard-basic-company" label="Company-name" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,company:e.target.value}})} />
            <TextField id="standard-basic-company-location" label="Company-Location" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,jobLocation:e.target.value}})}/>
            <TextField id="standard-basic-duration" label="Duration" variant="standard"onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,duration:e.target.value}})}/>
          </div>
        </div>
      )
      case 4 :return(
        <div>
          <h3>Skills</h3>
          <div class="d-flex align-items-center justify-content-between p-3">
            {/* <TextField id="standard-basic-skill" label="Add-Skills" variant="standard" sx={{ width: "500px" }} /> */}
            <input  type="text" className='form-control' placeholder='Add skills' />
            <Button variant="text" >Add</Button>
          </div>
          <h5>Suggestion :</h5>
          <div className="row my-3">
            {skillSuggectionArray.map(userSkills => (
              <div className="col-md-3 col-6 mb-2" key={userSkills}>
                <Button className="w-100" variant="outlined">
                  {userSkills}
                </Button>
              </div>
            ))
            }
          </div>
          <h5>Added Skills</h5>
          <div class="d-flex align-items-center justify-content-between my-3">
            {/* span tag must me duplicated accounding to the user added skills */}
            <span className='btn btn-primary d-flex align-items-center justify-content-center'>REACT<button className='btn text-light'>X</button></span>
   </div>


        </div>
      )
      case 5 :return(
        <div>
          <h3>Personal Summary</h3>
          <div className="d flex row p-3">
            <TextField id="standard-basic-summary" label="Write a short summary of yourself" variant="standard" multiline rows={4}
            defaultValue={"Enthusiastic and motivated recent graduate with a strong foundation in [your field, e.g., Computer Science / Data Analytics / Cybersecurity]. Skilled in [list 2–3 key skills, e.g., data analysis, programming, and problem-solving] with hands-on experience through academic projects, internships, and self-learning. Eager to apply theoretical knowledge to real-world challenges, contribute to team success, and grow within a dynamic and forward-thinking organization."} onChange={e=>setUserInput({...userInput,summary:e.target.value})}/>
          </div>
        </div>
      )
      default: return(null)
      
    }
}

  return (
   <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* view of each steps */}
           
           <Box>
               {renderStepArrayContent(activeStep)}   
           </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default Steps