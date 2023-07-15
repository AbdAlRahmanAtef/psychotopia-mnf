'use client';

import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';

const Post = ({ post }) => {
  return (
    <Card sx={{ maxWidth: 345, overflow: 'hidden' }}>
      <CardMedia
        component="img"
        height="194"
        image={post.image}
        alt={post.title}
      />
      <CardContent>
        <Typography
          variant="body1"
          color="text.secondary"
          fontSize="20px"
          fontWeight={700}
          mb={2}
        >
          Title
        </Typography>
        <Typography
          mb="20px"
          variant="body2"
          color="text.secondary"
          fontSize="16px"
        >
          {post.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {post.tags?.map((tag) => (
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
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};

export default Post;
