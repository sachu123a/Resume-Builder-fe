import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "40px 60px",
        
      }}
    >
      
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Resume Builder
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.7,
              color: "#ccc",
              maxWidth: "650px",
            }}
          >
            A Resume Builder suggests job-specific keywords, professional
            summaries, and skill recommendations to make the resume more
            effective and ATS (Applicant Tracking System) friendly. The main
            goal of the AI Powered Resume Builder is to simplify the resume
            creation process and help job seekers build professional,
            well-structured resumes in a few minutes.
          </Typography>
        </Box>

        
        <Box
          sx={{
            justifySelf: "end",
            width: "350px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Contact Us
          </Typography>

          <Stack spacing={2}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <CiMail size={22} />
              <Typography>
                sachunithin@gmail.com
              </Typography>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <IoIosCall size={22} />
              <Typography>
                9786483264
              </Typography>
            </Stack>
          </Stack>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mt: 3,
              mb: 2,
            }}
          >
            Connect With Us
          </Typography>

          <Stack direction="row" spacing={2}>
            <GrInstagram size={25} />
            <FaFacebookSquare size={25} />
            <IoLogoWhatsapp size={25} />
          </Stack>
        </Box>
      </Box>
       <Box sx={{ textAlign: "center", marginTop: "40px" }}>
        <Typography sx={{fontWeight: "bold", color: "white", fontSize: "15px" }}>
          Designed & built with ❤️ using React
        </Typography>
      </Box>
     
    </Box>
  );
};

export default Footer;