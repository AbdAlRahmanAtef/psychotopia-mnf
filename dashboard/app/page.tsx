'use client';

import { RootState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import Post from 'components/Post';
import { redirect } from 'next/navigation';
import Loader from '@/components/Loader';
import { setAdmin } from '@/redux/slices/admin';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    setIsLoading(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        next: { revalidate: 10 },
      })
        .then((res) => res.json())
        .then((res) => setPosts(res.posts));
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
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: 2,
          }}
        >
          {posts.length > 0 ? (
            posts.map((post) => (
              <>
                <Post key={post._id} post={post} />
              </>
            ))
          ) : (
            <Box>No Posts Found</Box>
          )}
        </Box>
      )}
    </Container>
  );
};

export default Home;
