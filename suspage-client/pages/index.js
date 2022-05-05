import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Index() {
  return (
    <Container
      sx={{ maxWidth: { sm: "sm", md: "md" }, px: { sx: "0", sm: "3%" } }}
      disableGutters={true}
    >
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
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
              Some Other Review
            </Typography>
            <Typography component="p">These guys are the best</Typography>
          </Box>
        </Grid>
        <Grid item md={4} sx={{ display: { md: "block", xs: "none" } }}>
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
            <Typography component="p">Secondary Content</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
