import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import jobJson from "../assets/jobRole.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { resume } from "react-dom/server";
import summaryJson from "../assets/summaries.json";
import skillJson from "../assets/jobSkills.json";
import { toast } from "react-toastify";
import { addResume } from "../services/Allapi";
import { useNavigate } from "react-router-dom";


const Form = ({ setResumeData, resumeData }) => {

const navigate=useNavigate()
  
  const steps = [
    "Personal Details",
    " Contact Details",
    "Educational Details",
    "Review & Submit",
  ];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onJobRoleChange = (role) => {
    setResumeData({
      ...resumeData,
      jobTitle: role,
      summary: summaryJson[role],
      skills: skillJson[role],
    });
  };
  const onFinishButtonClick = async () => {
    try {
      if (
        resumeData.fullName == "" ||
        resumeData.location == "" ||
        resumeData.jobTitle == "" ||
        resumeData.email == "" ||
        resumeData.contactNumber == 0 ||
        resumeData.linkedin == "" ||
        resumeData.github == "" ||
        resumeData.degree == "" ||
        resumeData.university == "" ||
        resumeData.yog == 0 ||
        resumeData.summary == "" ||
        resumeData.skills == []
      ) {
        toast.error("Please fill the form");
      } else {
        let apiResponse = await addResume(resumeData);
        console.log(apiResponse)
        if (apiResponse.status == 201) {


          toast.success("successfully added reseume");
          navigate(`/resumes/${apiResponse.data.id}`)
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  const renderStepper = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <Typography sx={{ mb: 2, fontWeight: "bold" }} variant="h5">
              {" "}
              Personal Details
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              id="fullname"
              label="Full Name"
              variant="standard"
              value={resumeData.fullName}
              onChange={(e) =>
                setResumeData({ ...resumeData, fullName: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%" }}
              id="location"
              label="Location"
              variant="standard"
              value={resumeData.location}
              onChange={(e) =>
                setResumeData({ ...resumeData, location: e.target.value })
              }
            />

            <FormControl sx={{ mt: 3 }} fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Job Title
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={''}
                label="Select Job Title"
                onChange={(e) => onJobRoleChange(e.target.value)}
              >
                {jobJson?.jobRoles?.map((eachJob, index) => (
                  <MenuItem key={index} value={eachJob}>
                    {eachJob}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        );
        break;

      default:
        break;
    }

    switch (activeStep) {
      case 1:
        return (
          <>
            <Typography sx={{ mb: 3, fontWeight: "bold" }} variant="h5">
              {" "}
              Contact Details
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              id="email"
              label="Email"
              variant="standard"
              value={resumeData.email}
              onChange={(e) =>
                setResumeData({ ...resumeData, email: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%" }}
              id="contactno"
              label="Contact Number"
              variant="standard"
              value={resumeData.contactNumber}
              onChange={(e) =>
                setResumeData({ ...resumeData, contactNumber: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%" }}
              id="linkedin"
              label="Linkedin Link"
              variant="standard"
              value={resumeData.linkedin}
              onChange={(e) =>
                setResumeData({ ...resumeData, linkedin: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%", mb: 3 }}
              id="github"
              label="Github Link"
              variant="standard"
              value={resumeData.github}
              onChange={(e) =>
                setResumeData({ ...resumeData, github: e.target.value })
              }
            />
          </>
        );

        break;

      default:
        break;
    }

    switch (activeStep) {
      case 2:
        return (
          <>
            <Typography sx={{ mb: 3, fontWeight: "bold" }} variant="h5">
              {" "}
              Educational Details
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              id="degree"
              label="Bachelor's Degree"
              variant="standard"
              value={resumeData.degree}
              onChange={(e) =>
                setResumeData({ ...resumeData, degree: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%" }}
              id="college"
              label="College/University Name"
              variant="standard"
              value={resumeData.university}
              onChange={(e) =>
                setResumeData({ ...resumeData, university: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%", mb: 3 }}
              id="year"
              label="Year of Graduation"
              variant="standard"
              value={resumeData.yog}
              onChange={(e) =>
                setResumeData({ ...resumeData, yog: e.target.value })
              }
            />
          </>
        );

        break;

      default:
        break;
    }

    switch (activeStep) {
      case 3:
        return (
          <>
            <Typography sx={{ lineHeight: "1.5" }} variant="p">
              {" "}
              Our AI will generate Skills & Summary according to your job
              role.Once the form get submitted, user won't get the chance to
              update the resume details. If you want ot proceed please click the
              Generate AI Skill & Summary button to submit.
            </Typography>
          </>
        );

        break;

      default:
        break;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

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
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset} ref={resetButtonRef}>
              Reset
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {renderStepper()}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === steps.length - 1 ? (
              <Button onClick={onFinishButtonClick}>Finish</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default Form;