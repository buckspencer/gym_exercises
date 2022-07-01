import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#faffff">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made by Spencer Digital Works
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
