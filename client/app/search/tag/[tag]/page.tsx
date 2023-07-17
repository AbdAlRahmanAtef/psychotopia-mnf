'use client';

import Landing from '@/components/Landing';
import Loader from '@/components/Loader';
import NoResults from '@/components/NoResults';
import Post from '@/components/Post';
import { Container, Box } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SearchTags = ({ params }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  console.log(params);

  const getPost = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/posts/tags?tags=${params.tag}`,
      );
      setPosts(data);
      console.log(data);
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
    <Container sx={{ overflow: 'hidden', mb: 6 }}>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </Container>
  );
};

export default SearchTags;
