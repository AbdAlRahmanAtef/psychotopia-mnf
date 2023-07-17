'use client';

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Post = ({ post }) => {
  const router = useRouter();

  return (
    <Card sx={{ overflow: 'hidden' }}>
      <CardMedia
        component="img"
        height="auto"
        image={post.image}
        alt={post.title}
      />
      <CardContent>
        <Typography
          variant="body1"
          color="text.primary"
          fontSize="20px"
          fontWeight={700}
          fontFamily={'"El Messiri", sans-serif'}
        >
          {post?.title}
        </Typography>

        <Box overflow="hidden" height="202px" mb="10px" position="relative">
          {post.description.split('\n').map((line, index) => (
            <Typography
              variant="body2"
              color="text.primary"
              fontWeight={500}
              fontSize="16px"
              fontFamily={"'IBM Plex Sans Arabic', sans-serif"}
              key={index}
            >
              {line}
            </Typography>
          ))}
        </Box>
        <Link href={`/post/${post._id}`}>
          <Typography
            sx={{
              width: '100%',
              cursor: 'pointer',
              transition: '.3s',
              fontFamily: "'IBM Plex Sans Arabic', sans-serif",
              mb: 2,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            المزيد...
          </Typography>
        </Link>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {post.tags?.map((tag) => (
            <Link key={tag} href={`/search/tag/${tag.slice(1).toLowerCase()}`}>
              <Typography
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
            </Link>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Post;
