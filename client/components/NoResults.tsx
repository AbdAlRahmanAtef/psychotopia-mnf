'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';

const NoResults = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'text.primary',
        width: '100%',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="180"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M15.333 9.5A3.5 3.5 0 0 0 8.8 7.75a1 1 0 0 0 1.733 1a1.503 1.503 0 0 1 1.3-.75a1.5 1.5 0 1 1 0 3h-.003a.95.95 0 0 0-.19.039a1.032 1.032 0 0 0-.198.04a.983.983 0 0 0-.155.105a1.008 1.008 0 0 0-.162.11a1.005 1.005 0 0 0-.117.174a.978.978 0 0 0-.097.144a1.023 1.023 0 0 0-.043.212a.948.948 0 0 0-.035.176v1l.002.011v.491a1 1 0 0 0 1 .998h.003a1 1 0 0 0 .998-1.002l-.002-.662A3.494 3.494 0 0 0 15.333 9.5Zm-4.203 6.79a1 1 0 0 0 .7 1.71a1.036 1.036 0 0 0 .71-.29a1.015 1.015 0 0 0 0-1.42a1.034 1.034 0 0 0-1.41 0Z"
        />
      </svg>
      <Typography
        textAlign="center"
        mt="-20px"
        fontSize="18px"
        fontWeight={700}
      >
        {' '}
        NO Posts Found
      </Typography>
    </Box>
  );
};

export default NoResults;
