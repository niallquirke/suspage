import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const WelcomeCard = () => {
  return (
    <Box
      sx={{
        mt: 4,
        px: "6%",
        py: 2,
        border: "1px solid #e6ebf1",
        bgcolor: "#fff",
        height: 500,
        width: "100%",
      }}
    >
      <Typography variant="h4" component="h1">
        Inspiring message
      </Typography>
      <Typography component="p">Add your first review!</Typography>
    </Box>
  );
};

export default WelcomeCard;
