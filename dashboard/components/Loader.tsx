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
      <div className="spinner"></div>
    </Box>
  );
};

export default Loader;
