import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FilterTool = () => {
  return (
    <Box
      sx={{
        my: 4,
        border: "1px solid #dbdbdb",
        bgcolor: "#fff",
        borderRadius: "10px",
        padding: 2,
        height: 400,
        width: "100%",
      }}
    >
      <Typography component="p">Filters</Typography>
    </Box>
  );
};

export default FilterTool;
