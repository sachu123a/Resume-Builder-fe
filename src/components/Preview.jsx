import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { FaFileDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import html2Canvas from "html2canvas";

const Preview = ({ resumeData }) => {

  const onDownloadClick=async()=>{
    let resultEl = document.getElementById(resumeData.id?resumeData.id:"el")
    let canvas = await html2Canvas(resultEl)
    let imgData =canvas.toDataURL('image/png')
    console.log(imgData)
    let pdf = new jsPDF('p','mm','a4')
    let pdfWidth = pdf.internal.pageSize.getWidth()
    let pdfHeight = (canvas.height*pdfWidth)/canvas.width
    pdf.addImage(imgData,'pdf',0,0,pdfWidth,pdfHeight)
    pdf.save('resume.pdf')
  }
  return (
    <Box sx={{ pl: 9, pt: 4 }}>
      <Button onClick={onDownloadClick} variant="contained">
        <FaFileDownload style={{ marginRight: "8px" }} />
        Download CV
      </Button>
      <Paper id={resumeData.id?resumeData.id:"el"} sx={{ p: 3 }} elevation={2}>
        <Typography variant="h5">Full Name:{resumeData?.fullName}</Typography>
        <Typography sx={{ my: 1 }}>
          Phone:{resumeData?.contactNumber}
        </Typography>
        <Typography sx={{ my: 1 }}>Email:{resumeData?.email}</Typography>
        <Typography sx={{ my: 1 }}>Linkedln:{resumeData?.linkedin}</Typography>
        <Typography sx={{ my: 1 }}>GitHub:{resumeData?.github}</Typography>
        <Typography sx={{ my: 1 }}>Location:{resumeData?.location}</Typography>
        <Divider />
        <Typography sx={{ mt: 2 }} variant="h5">
          Professional Summary{resumeData?.summary}
        </Typography>
        <Typography variant="p"></Typography>
        <Divider />
        <Typography sx={{ mt: 2 }} variant="h5">
          Techical Skills
        </Typography>
        {resumeData?.skills?.map((eachskill, index) => (
          <Button key={index}>{eachskill}</Button>
        ))}

        <Divider />
        <Typography sx={{ mt: 2 }} variant="h5">
          Education
        </Typography>
        <Typography sx={{ my: 1 }}>
          Bahelor's Degree:{resumeData?.degree}
        </Typography>
        <Typography sx={{ my: 1 }}>
          Uiversity/College Name:{resumeData?.university}
        </Typography>
        <Typography sx={{ my: 1 }}>
          Year of Graduation:{resumeData?.yog}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Preview;
