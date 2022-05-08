import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SecondaryContent = () => {
  return (
    <Box
      sx={{
        my: 4,
        border: "1px solid #e6ebf1",
        bgcolor: "#fff",
        borderRadius: "10px",
        padding: 2,
        height: 400,
        width: "100%",
      }}
    >
      <Typography component="p">Secondary Content</Typography>
    </Box>
  );
};

export default SecondaryContent;
