'use client';

import React from 'react';
import { Box } from '@mui/material';

import landingImage from 'assets/landing.png';

const Landing = () => {
  return (
    <Box
      mt={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      maxHeight="500px"
      position="relative"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={landingImage.src}
        alt=""
        style={{
          maxHeight: '500px',
        }}
      />
    </Box>
  );
};

export default Landing;
