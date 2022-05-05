import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import WelcomeCard from "../components/WelcomeCard";
import Review from "../components/Review";
import FilterTool from "../components/FilterTool";

export default function Index() {
  return (
    <Container
      sx={{ maxWidth: { sm: "sm", md: "md" }, px: { sx: "0", sm: "3%" } }}
      disableGutters={true}
    >
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <WelcomeCard />
          <Review />
          <Review />
          <Review />
        </Grid>
        <Grid item md={4} sx={{ display: { md: "block", xs: "none" } }}>
          <FilterTool />
        </Grid>
      </Grid>
    </Container>
  );
}
