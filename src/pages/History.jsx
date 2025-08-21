import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <>
  
      <div className=''>
        <h1 className="text-center mt-5">Resume Downloaded History</h1>
        <span><Link to={'/'} style={{marginTop:'-50px'}} className='float-end me-5'>Back</Link></span>
      </div>

       <Box component="section" className='container-fluid' >
     <div className='row'>
        <div className='col-md-4'>
          <Paper elevation={3} sx={{ my:5, p: 5,textAlign:"center" }}>
            <div className="d-flex align-items-center justify-content-eveniy">
              <h6>Rewiew at : <br /> 22/07/2025,3:56pm</h6>
              <button className='btn text-danger fs-4 ms-5'><MdDelete /></button>
            </div>
               <div className='border rounded p-3'>
                 {/* user personal details */}
                 <h2>Name</h2>
                 <h5>job Title</h5>
                 <p><span>location</span>|<span>email</span>|<span>phone</span></p>
                 <p>
                  <Link href={""}>GitHub</Link>|
                  <Link href={""}>Linkedin</Link>|
                  <Link href={""}>Portfolio</Link>
                 </p>
      
                 {/* summary */}
                 <Divider sx={{fontSize:'25px'}}>summary</Divider>
                 <p className='fs-5 text-start'>user summary</p>
                 <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
      
                 {/* education */}
                 <h6> user education</h6>
                 <p><span>collage</span>|<span>univercity</span>|<span>year</span></p>
                  
                  {/* experiences */}
      
                  <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Profational experiences</Divider>
                 <h6> user job</h6>
                 <p><span>company</span>|<span>location</span>|<span>duration</span></p>
                   
                   {/* Skills */}
      
                  <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Skills</Divider>
                     <Stack spacing={2} direction="row" sx={{flexWrap:"wrap",gap:"10px", justifyContent:'space-evenly'}}>
                        <Button variant="contained">User Skill</Button>
                        <Button variant="contained">User Skill</Button>
                        <Button variant="contained">User Skill</Button>
                        <Button variant="contained">User Skill</Button>
                        
                      </Stack>
      
               </div>
    
    
             </Paper>
        </div>
     </div>
    </Box>
    </>
  )
}

export default History