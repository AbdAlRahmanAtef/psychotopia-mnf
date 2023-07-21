'use client';

import { RootState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Sidebar from 'components/Sidebar';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import Post from 'components/Post';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';
import { setAdmin } from '@/redux/slices/admin';

const Home = () => {
  const { admin, token } = useSelector((state: RootState) => state.admin);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  const getAdmin = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/${admin._id}`,
      );

      setIsAdmin(data);
      if (!isAdmin) {
        dispatch(setAdmin({ admin: null, token: null }));
      }
    } catch (error) {
      setIsAdmin(false);
    } finally {
      setIsLoading(false);
    }
  };

  const getPosts = async () => {
    setIsLoading(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        next: { revalidate: 10 },
      })
        .then((res) => res.json())
        .then((res) => setPosts(res.posts));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAdmin();

    if (token === null || !isAdmin) {
      router.push('/login');
    } else {
      getPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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
