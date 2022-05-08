import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Press = () => {
  return (
    <Box
      sx={{
        mt: 4,
        px: "6%",
        py: 2,
        border: "1px solid #e6ebf1",
        height: 300,
        width: "100%",
      }}
    >
      <Typography variant="h4" component="h1">
        What people are saying about SusPage
      </Typography>
      <Typography component="p">Add your first review!</Typography>
    </Box>
  );
};

export default Press;
