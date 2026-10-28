import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getResumes } from "../services/Allapi";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Preview from "../components/Preview";

const Alldownloads = () => {
  const [resumeDatas, setResumeData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let apiResponse = await getResumes();

      if (apiResponse.status === 200) {
        setResumeData(apiResponse.data);
      } else {
        toast.error("API call failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("API call failed");
    }
  };

  return (
    <Box>
      {resumeDatas?.length > 0 ? (
        <Box>
          <Typography variant="h5">All Downloads</Typography>

          <Grid sx={{ p: 5 }} spacing={5} container>
            {resumeDatas.map((eachResume, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={eachResume.id || index}>
                <Button
                  component={Link}
                  to={`/resumes/${eachResume.id}`}
                  sx={{ mb: 2 }}
                >
                  View Details
                </Button>

                <Preview resumeData={eachResume} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Typography>No resumes available</Typography>
      )}
    </Box>
  );
};

export default Alldownloads;
