import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HelperPrompt = () => {
  return (
    <Box
      sx={{
        mt: 4,
        border: "1px solid #e6ebf1",
        bgcolor: "#fff",
        borderRadius: "10px",
        padding: 2,
        height: 300,
        width: "100%",
      }}
    >
      <Typography variant="h4" component="h1">
        Check out...
      </Typography>
      <Typography component="p">Icons for popular uses...</Typography>
    </Box>
  );
};

export default HelperPrompt;
