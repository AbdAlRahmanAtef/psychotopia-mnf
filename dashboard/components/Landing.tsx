'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';

import landingImage from 'assets/landing.png';

const Landing = () => {
  console.log(landingImage);
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
      <Typography
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#016fc8',
          fontSize: '50px',
          fontWeight: 700,
        }}
      >
        <Typewriter
          options={{
            strings: ['Psychotopia', 'MNF'],
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>
    </Box>
  );
};

export default Landing;
