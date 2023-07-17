'use client';

import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Sidebar from 'components/Sidebar';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import Post from 'components/Post';
import { useRouter } from 'next/navigation';

const Home = () => {
  const { admin, token } = useSelector((state: RootState) => state.admin);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  const getPosts = async () => {
    setIsLoading(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        next: { revalidate: 10 },
      })
        .then((res) => res.json())
        .then((res) => setPosts(res));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }

    getPosts();
  }, []);

  return (
    <Container>
      <Box
        sx={{
          direction: 'rtl',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
          py: 6,
        }}
      >
        <Sidebar />

        {isLoading ? (
          <Box>Loading...</Box>
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
      </Box>
    </Container>
  );
};

export default Home;
