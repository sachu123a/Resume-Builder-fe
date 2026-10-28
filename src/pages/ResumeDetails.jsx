import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import Preview from '../components/Preview'
import Form from '../components/Form'




const ResumeDetails = () => {
  const [resumeData,setResumeData]=useState({
    fullName:"",
    location:"",
    jobTitle:"",
    email:"",
    contactNumber:0,
    linkedln:"",
    github:"",
    degree:"",
    university:"",
    yog:0,
    summary:"",
    skills:[]
  })
  return (
  <Box>

    <Grid sx={{marginTop:"50px",ml:"50px",mb:"50px"}} container>
      <Grid size={{md:6}}>
        <Form setResumeData={setResumeData} resumeData={resumeData}/>

      </Grid>
    <Grid size={{md:6}}>
      <Preview resumeData={resumeData} />
    </Grid>
    </Grid>
  </Box>
  )
}

export default ResumeDetails
