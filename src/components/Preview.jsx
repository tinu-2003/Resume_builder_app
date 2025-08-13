import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';



function Preview() {
  return (
    <>
 <Box component="section" >
      <Paper elevation={3} sx={{ p: 2,textAlign:"center" }}>
           
           <h2>Name</h2>
           <h5>job Title</h5>
           <p><span>location</span>|<span>email</span>|<span>phone</span></p>
           <p>
            <Link href={""}>GitHub</Link>|
            <Link href={""}>Linkedin</Link>|
            <Link href={""}>Portfolio</Link>
           </p>
           <Divider>summary</Divider>

         </Paper>
    </Box>
    </>
  )
}

export default Preview