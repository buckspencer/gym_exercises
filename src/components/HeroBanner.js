/* eslint-disable no-unused-vars */
import React from "react";

import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#2df07a" fontWeight="600" fontSize="26px">
        GigaChad Fitness Club
      </Typography>
      <Typography
        fontWeight={600}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile, <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most manly and effective exercises in existence.
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#2df07a", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#2df07a"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img
        src={HeroBannerImage}
        alt="banner"
        className="hero-banner-img"
        style={{ width: "50%" }}
      />
    </Box>
  );
};

export default HeroBanner;
