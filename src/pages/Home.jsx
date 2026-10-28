import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import homeImage from "../assets/background.jpeg";
import back from "../assets/back.png";
import portrait from "../assets/portrait.jpeg";

const Home = () => {
  const people = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/75.jpg",
    "https://randomuser.me/api/portraits/men/46.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/women/47.jpg",
    "https://randomuser.me/api/portraits/women/21.jpg",
    "https://randomuser.me/api/portraits/men/52.jpg",
    "https://randomuser.me/api/portraits/men/18.jpg",
    "https://randomuser.me/api/portraits/men/41.jpg",
    "https://randomuser.me/api/portraits/men/67.jpg",
  ];

  return (
    <>
  
      <Box
        sx={{
          height: "125vh",
          minHeight: "700px",

          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.25),
              rgba(0, 0, 0, 0.25)
            ),
            url(${homeImage})
          `,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",

          position: "relative",
        }}
      >
       

        <Box
          sx={{
            position: "relative",
            zIndex: 1,

            height: "100vh",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            padding: "20px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.55)",

              width: {
                xs: "95%",
                sm: "85%",
                md: "65%",
              },

              maxWidth: "850px",

              padding: {
                xs: "30px 20px",
                sm: "40px 35px",
                md: "45px 50px",
              },

              borderRadius: "8px",

              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
                lineHeight: 1.2,
                mb: 3,

                fontSize: {
                  xs: "30px",
                  sm: "40px",
                  md: "48px",
                },
              }}
            >
              Smarter Resumes.
              <br />
              Better Opportunities.
            </Typography>

            <Typography
              sx={{
                color: "white",
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: "16px",
                  md: "21px",
                },
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Let AI help you create a professional resume
              <br />
              tailored to your career goals.
            </Typography>

            <Button
              component={Link}
              to="/resume"
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
              Make your Resume with AI
            </Button>
          </Box>
        </Box>
      </Box>



      <Box
        sx={{
          height: "300px",

          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.25),
              rgba(0, 0, 0, 0.25)
            ),
            url(${homeImage})
          `,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />


      <Box
        sx={{
          backgroundColor: "white",
          position: "relative",
          zIndex: 2,

          padding: {
            xs: "60px 25px",
            md: "80px 10%",
          },
        }}
      >
       

        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Georgia, serif",
            fontWeight: "bold",

            fontSize: {
              xs: "32px",
              md: "42px",
            },

            color: "#20242a",
            mb: 7,
          }}
        >
          Build Your Resume With Confidence
        </Typography>

        {/* CONTENT */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },

            gap: {
              xs: "40px",
              md: "80px",
            },

            alignItems: "center",
          }}
        >
         

          <Box>
            <Typography
              sx={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#333",
                textAlign: "justify",
                mb: 3,
              }}
            >
              Your resume is more than a document. It is the first impression
              you make on a recruiter. Resume Builder helps you turn your
              education, skills, experience, and achievements into a clear and
              professional resume.
            </Typography>

            <Typography
              sx={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#333",
                textAlign: "justify",
                mb: 3,
              }}
            >
              With AI-powered suggestions, you can improve your professional
              summary, highlight relevant skills, and organize your information
              in a way that makes your strengths easier to understand.
            </Typography>

            <Typography
              sx={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#333",
                textAlign: "justify",
                mb: 4,
              }}
            >
              Whether you are a student looking for your first opportunity or
              a professional preparing for your next career move, Resume
              Builder gives you a simple way to create a resume that represents
              you.
            </Typography>

            <Button
              component={Link}
              to="/resume"
              variant="contained"
              sx={{
                backgroundColor: "#8b5e45",
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                padding: "11px 22px",
                borderRadius: "6px",

                "&:hover": {
                  backgroundColor: "#704a37",
                },
              }}
            >
              Start Building
            </Button>
          </Box>

        

          <Box
            component="img"
            src={portrait}
            alt="Professional resume"
            sx={{
              width: "100%",

              height: {
                xs: "350px",
                md: "500px",
              },

              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        </Box>
      </Box>



      <Box
        sx={{
          height: {
            xs: "300px",
            md: "500px",
          },

          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.15),
              rgba(0, 0, 0, 0.15)
            ),
            url(${back})
          `,

          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          backgroundAttachment: "fixed",

          backgroundColor: "#ffffff",
        }}
      />

     

      <Box
        sx={{
          backgroundColor: "white",

          padding: {
            xs: "60px 25px",
            md: "70px 10%",
          },
        }}
      >
        

        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Georgia, serif",
            fontWeight: "bold",

            fontSize: {
              xs: "36px",
              md: "50px",
            },

            color: "#20242a",

            mb: {
              xs: 7,
              md: 10,
            },
          }}
        >
          Testimony
        </Typography>

      

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },

            gap: {
              xs: "50px",
              md: "100px",
            },

            alignItems: "center",

            maxWidth: "1400px",

            margin: "0 auto",
          }}
        >
         

          <Box>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",

                fontSize: {
                  xs: "22px",
                  md: "28px",
                },

                fontWeight: "bold",

                color: "#20242a",

                mb: 2,
              }}
            >
              Trusted by professionals worldwide.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Georgia, serif",

                fontSize: {
                  xs: "16px",
                  md: "19px",
                },

                lineHeight: 1.6,

                color: "#20242a",

                mb: 3,
              }}
            >
              At Resume Builder, we don't just help you create résumés — we
              help you land the job. Whether you're a seasoned professional or
              just starting out, our tools are designed to get results.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Georgia, serif",

                fontSize: {
                  xs: "16px",
                  md: "19px",
                },

                lineHeight: 1.6,

                color: "#20242a",

                mb: 3,
              }}
            >
              In fact, users who used Resume Builder reported getting hired an
              average of 48 days faster.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Georgia, serif",

                fontSize: {
                  xs: "16px",
                  md: "19px",
                },

                lineHeight: 1.6,

                color: "#20242a",
              }}
            >
              Join thousands of job-seekers who've fast-tracked their careers
              with a résumé that truly stands out.
            </Typography>
          </Box>

   

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "repeat(3, 1fr)",
                sm: "repeat(4, 1fr)",
              },

              gap: {
                xs: "15px",
                md: "20px",
              },

              maxWidth: "650px",

              margin: {
                xs: "0 auto",
                md: "0",
              },
            }}
          >
            {people.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                alt={`Professional ${index + 1}`}
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

  

      <Box
        sx={{
          height: {
            xs: "px",
            md: "px",
          },

          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.15),
              rgba(0, 0, 0, 0.15)
            ),
            url(${back})
          `,

          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          backgroundAttachment: "fixed",

          backgroundColor: "#ffffff",
        }}
      />
    </>
  );
};

export default Home;