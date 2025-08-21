import React from 'react';
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <>
    {/* first section */}
<section
  className="container-fluid d-flex justify-content-center align-items-center"
  style={{
    width: "100%",
    height: "100vh",
    overflowX: "hidden",
    backgroundImage:
      "url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')",
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
    backgroundSize: "cover",
  }}
  id="part_one"
>
  <div
    className="shadow border py-5 px-4 rounded text-center"
    style={{ backgroundColor: "rgba(225,225,225,0.5)" }}
  >
    <h4>Designed to get hired</h4>
    <h6>Your skills, your story, your next job — all in one.</h6>
    <Link to="/resume">
      <button className="btn btn-primary">Make your resume</button>
    </Link>
  </div>
</section>
      {/* Tool Section */}
      <section className="tools p-5 text-center">
        <h1>Tools</h1>
      <div className='row align-items-center'>
         <div className="tool-content col-12 col-md-6  " >
          <div className=''>
            <h4>Resume</h4>
            <p>Lorem ipsum dolor, sit amet consectetur  </p>
            <h4>Cover Letter</h4>
            <p>Lorem ipsum dolor, sit amet consectetur  </p>
               <h4>Jobs</h4>
            <p>Lorem ipsum dolor, sit amet consectetur  </p>
  
               <h4>Applications</h4>
            <p>Lorem ipsum dolor, sit amet consectetur  </p>
          </div>
  
         </div>
         <div className="tool-image col-12 col-md-6">
          <img src="https://www.thebalancemoney.com/thmb/Mb4T9n6chYNcy5oVp4OKav-zlgE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cropped-hand-holding-resume-over-white-background-918715306-5b3f5a14c9e77c00372b2891.jpg" alt="tool" className="img-fluid" />
         </div>
      </div>
      </section>

      {/* image section */}
       <section style={{ width: '100%',  height: '450px', backgroundImage: "url('https://st2.depositphotos.com/3591429/10568/i/450/depositphotos_105687912-business-people-working-in-office.jpg')", backgroundAttachment: 'fixed', backgroundSize: 'cover' ,backgroundPosition:'top'}} >
      </section>

      {/* testimony */}
      <section className="testimony p-5">
        <h1 className='text-center'>testimony</h1>
      <div className='row align-items-center'>
         <div className="testimony-content col-12 col-md-6  " >
          <div className=''>
            <h4>Resume builder App</h4>
            <p>Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, iste. Laborum, impedit magnam odio sunt cupiditate id commodi similique nemo, officia voluptas quo a esse accusamus? Molestias dicta ipsum deleniti!  </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis tenetur os.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis tenetur os.</p>
            
          </div>
  
         </div>
          <div className="testimony-image col-12 col-md-6">
         <div className='row -row-gap-2'>
            <div>
              <img className="col-3" width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s" alt="tool" />
              </div>
               <div>
              <img className="col-3" width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s" alt="tool" />
              </div>
             
         </div>
         </div>
      </div>

      </section>
    </>
  );
};

export default Landingpage;
