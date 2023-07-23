'use client';

import Loader from '@/components/Loader';
import PostDetails from '@/components/PostDetails';
import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Post = ({ params }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(null);

  const getPost = async () => {
    try {
      setIsLoading(true);
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${params.id}`, {
        next: { revalidate: 4 },
      })
        .then((res) => res.json())
        .then((res) => setPost(res));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Box my={6}>
          <PostDetails post={post} />
        </Box>
      )}
    </Container>
  );
};

export default Post;
