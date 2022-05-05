import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Review = () => {
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
        Some Review
      </Typography>
      <Typography component="p">These guys are the worst</Typography>
    </Box>
  );
};

export default Review;
