import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { IoMdDocument } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";
import homeImage from "../assets/background.jpeg";
import back from "../assets/back.png";
import portrait from "../assets/portrait.jpeg";

const ResumeGenerate = () => {
  return (
    <Box>
      <Box>
        <Typography
                    variant="h2"
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: "Georgia, serif",
                      lineHeight: 1.2,
                      mb: 3,
                      textAlign:"center",
                      padding:8,
      
                      fontSize: {
                        xs: "30px",
                        sm: "40px",
              
                      },
                    }}>

      
        
        Create an ATS Friendly Resume in Minutes with AI
</Typography>
      </Box>
     <Box sx={{display:"flex",justifyContent:"space-evenly",textAlign:"center",marginTop:"100px"}}>
       <Box sx={{border:2,borderRadius:"10px",padding:"80px 30px",boxShadow:20}}>
        <IoMdDocument color="blue"  />
        <Typography variant="h5" component={"h1"}>Add Your Details</Typography>
        <Typography>Our AI will generate Skills & Summary</Typography>
        <Typography >Step 1</Typography>
      </Box>
      <Box sx={{border:2,borderRadius:"10px",padding:"80px 30px",boxShadow:20}}>
       <HiDocumentDownload color="red" />
        <Typography variant="h5" component={"h1"}>Download your resume</Typography>
        <Typography>Download CV as PDF and start applying</Typography>
        <Typography >Step 2</Typography>
      </Box>
     </Box>
                  <Box sx={{textAlign:"center",padding:15}}>
                        <Button component={Link}
                                      to="/resumedetails"
                                      variant="contained"
              
              sx={{
                backgroundColor: "#8b5e45",
                color: "white",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px 18px",
                borderRadius: "6px",
                
                "&:hover": {
                  backgroundColor: "#704a37",
                },
              }}
            >
              Let's Start
            </Button>
                  </Box>
    </Box>
    
  )
}

export default ResumeGenerate
