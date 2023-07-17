'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';

import logoDark from 'assets/Logo-dark.svg';
import logoLight from 'assets/Logo-light.svg';
import { useTheme } from 'next-themes';

const Landing = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Box mt={2} textAlign="center" position="relative" mb={6}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={resolvedTheme === 'dark' ? logoDark.src : logoLight.src}
        alt=""
        style={{
          maxHeight: '300px',
        }}
      />
      <Typography
        sx={{
          color: 'text.secondary',
          fontSize: '50px',
          fontWeight: 700,
          textAlign: 'center',
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
