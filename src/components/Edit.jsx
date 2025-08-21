import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEdit } from "react-icons/fa";
import { TextField } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
};

function Edit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <button onClick={handleOpen} className='btn fs-1 text-primary'><FaEdit /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* personal deatails */}

                        <h3>Personal Details</h3>
                        <div className="d flex row p-3">
                            <TextField id="standard-basic-name" label="Full-Name" variant="standard" />
                            <TextField id="standard-basic-job" label="Job-title" variant="standard" />
                            <TextField id="standard-basic-location" label="Location" variant="standard" />
                        </div>

                        {/* Contact Deatails */}

                        <h3>Contact Details</h3>
                        <div className="d flex row p-3">
                            <TextField id="standard-basic-email" label="Email" variant="standard" />
                            <TextField id="standard-basic-phone" label="Phone-No" variant="standard" />
                            <TextField id="standard-basic-github" label="GitHub Link" variant="standard" />
                            <TextField id="standard-basic-github" label="Linkedin Link" variant="standard" />
                            <TextField id="standard-basic-porttfolio" label="Portfolio Link" variant="standard" />
                        </div>
                        {/* Education */}
                        <h3>Education Details</h3>
                        <div className="d flex row p-3">
                            <TextField id="standard-basic-course" label="Cours-Name" variant="standard" />
                            <TextField id="standard-basic-collage" label="Collage-Name" variant="standard" />
                            <TextField id="standard-basic-university" label="University-Name" variant="standard" />
                            <TextField id="standard-basic-passingout" label="Year of Passing-Out" variant="standard" />
                        </div>

                        {/* Professional Details */}
                        <h3>Professional  Details</h3>
                        <div className="d flex row p-3">
                            <TextField id="standard-basic-role" label="Job Or Internship" variant="standard" />
                            <TextField id="standard-basic-company" label="Company-name" variant="standard" />
                            <TextField id="standard-basic-company-location" label="Company-Location" variant="standard" />
                            <TextField id="standard-basic-duration" label="Duration" variant="standard" />
                        </div>
                        {/* Skills */}
                        <h3>Skills</h3>
                        <div class="d-flex align-items-center justify-content-between p-3">
            <TextField id="standard-basic-skill" label="Add-Skills" variant="standard" sx={{ width: "500px" }} />
            <Button variant="text" >Add</Button>
          </div>
          <h5>Added Skills</h5>
          <div class="d-flex align-items-center justify-content-between my-3">
            {/* span tag must me duplicated accounding to the user added skills */}
            <span className='btn btn-outline-primary d-flex align-items-center justify-content-center'>REACT<button className='btn text-light'>X</button></span>
   </div>
                        {/*Personal Summary  */}
                        <h3>Personal Summary</h3>
                        <div className="d flex row p-3">
                            <TextField id="standard-basic-summary" label="Write a short summary of yourself" variant="standard" multiline rows={4}
                            />
                        </div>
                    </Typography>
                    <Button>Update</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Edit