import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const WelcomeCard = () => {
  return (
    <Box
      sx={{
        my: 4,
        border: "1px solid #dbdbdb",
        bgcolor: "#fff",
        borderRadius: "10px",
        padding: 2,
        height: 300,
        width: "100%",
      }}
    >
      <Typography variant="h4" component="h1">
        Welcome to SusPage
      </Typography>
      <Typography component="p">Here's how to use it</Typography>
    </Box>
  );
};

export default WelcomeCard;
