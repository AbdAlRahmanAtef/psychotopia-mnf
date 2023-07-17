'use client';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';

const PostDetails = ({ post }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'right',
        gap: '20px',
        overflow: 'hidden',
      }}
    >
      <CardContent sx={{ flex: 1, direction: 'rtl' }}>
        <Typography
          variant="body1"
          color="text.primary"
          fontSize="24px"
          fontFamily={'"El Messiri", sans-serif'}
          fontWeight={700}
          mb={2}
        >
          {post?.title}
        </Typography>

        <Box overflow="hidden" mb="10px" position="relative">
          {post?.description.split('\n').map((line, index) => (
            <Typography
              variant="body2"
              color="text.primary"
              fontWeight={500}
              fontFamily={"'IBM Plex Sans Arabic', sans-serif"}
              fontSize="18px"
              key={index}
            >
              {line}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {post?.tags?.map((tag) => (
            <Typography
              key={tag}
              sx={{
                color: '#1976d2',
                transition: '.3s',
                cursor: 'pointer',
                fontSize: '12px',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {tag}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <Box flex={1} textAlign="center">
        <CardMedia
          sx={{ borderRadius: '6px' }}
          component="img"
          height="auto"
          image={post?.image}
          alt={post?.title}
        />
      </Box>
    </Box>
  );
};

export default PostDetails;
