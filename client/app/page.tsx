'use client';

import { Box, Container, Paper, Typography } from '@mui/material';

import Landing from 'components/Landing';
import { useEffect, useState } from 'react';
import Post from '@/components/Post';
import Loader from '@/components/Loader';
import NoResults from '@/components/NoResults';
//
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      setIsLoading(true);
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/posts?category=${category}`,
        {
          next: { revalidate: 10 },
        },
      )
        .then((res) => res.json())
        .then((res) => {
          setPosts(res.posts);
          setCategories(res.allCategories);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(posts);

  useEffect(() => {
    getPosts();
  }, [category]);

  return (
    <Container sx={{ overflow: 'hidden', mb: 6 }}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Landing />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              overflowX: 'auto',
              direction: 'rtl',
              py: 2,
              mb: 5,
              '&::-webkit-scrollbar': {
                height: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#555',
              },
            }}
          >
            <Paper
              sx={{
                p: '10px 22px',
                fontSize: '18px',
                fontWeight: 'bold',
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                cursor: 'pointer',
                borderRadius: '100px',
              }}
              onClick={() => setCategory('')}
            >
              الكل
            </Paper>
            {categories.map((cat) => (
              <>
                <Paper
                  key={cat}
                  sx={{
                    p: '10px 22px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                    cursor: 'pointer',
                    borderRadius: '100px',
                    whiteSpace: 'nowrap',
                  }}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </Paper>
              </>
            ))}
          </Box>
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
