import * as React from "react";
import Container from "@mui/material/Container";

import WelcomeCard from "../components/WelcomeCard";
import Press from "../components/Press";

export default function Index() {
  return (
    <Container disableGutters={true} maxWidth="none">
      <WelcomeCard />
      <Press />
      {/*
          <HowItWorks />
          <GetStarted />
          <WhyBusinessesOnSusPage />
          <Testimonials />
          <RegisterABusiness />
          <Footer />
          */}
    </Container>
  );
}
