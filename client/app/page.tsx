'use client';

import { Box, Container, Typography } from '@mui/material';

import Landing from 'components/Landing';
import { useEffect, useState } from 'react';
import Post from '@/components/Post';
import Loader from '@/components/Loader';
import NoResults from '@/components/NoResults';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      setIsLoading(true);
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`, {
        next: { revalidate: 10 },
      })
        .then((res) => res.json())
        .then((res) => setPosts(res));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container sx={{ overflow: 'hidden', mb: 6 }}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Landing />

          {posts.length > 0 ? (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px',
                direction: 'rtl',
              }}
            >
              {posts.map((post: any) => (
                <Post key={post._id} post={post} />
              ))}
            </Box>
          ) : (
            <NoResults />
          )}
        </>
      )}
    </Container>
  );
};

export default Home;
