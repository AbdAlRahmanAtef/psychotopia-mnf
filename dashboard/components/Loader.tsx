'use client';

import { Box } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.677)',
        height: '100%',
        width: '100%',
      }}
    >
      <Box className="newtons-cradle">
        <Box
          className="newtons-cradle__dot"
          sx={{ '&::after': { backgroundColor: 'primary.main' } }}
        ></Box>
        <Box
          className="newtons-cradle__dot"
          sx={{ '&::after': { backgroundColor: 'primary.main' } }}
        ></Box>
        <Box
          className="newtons-cradle__dot"
          sx={{ '&::after': { backgroundColor: 'primary.main' } }}
        ></Box>
        <Box
          className="newtons-cradle__dot"
          sx={{ '&::after': { backgroundColor: 'primary.main' } }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Loader;
