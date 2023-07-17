/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';

import { Box, Container, IconButton, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NoResults from '@/components/NoResults';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/posts/search?query=${searchQuery}`,
      );
      setPosts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      getPost();
    }
  }, [searchQuery]);

  return (
    <Container>
      <Paper className="search-wrapper">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <p>
          <SearchIcon fontSize="large" />
        </p>
      </Paper>
      {searchQuery && (
        <Paper
          sx={{
            maxWidth: '700px',
            textAlign: 'center',
            padding: '16px',
            borderRadius: '12px',
          }}
        >
          {isLoading ? (
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 700,
                py: '16px',
              }}
            >
              Loading...
            </Typography>
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <Link key={post._id} href={`/post/${post._id}`}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    padding: '10px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#3a3b3c',
                    },
                  }}
                >
                  <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>
                    {post.title}{' '}
                    <IconButton
                      sx={{ backgroundColor: 'background.default' }}
                      size="medium"
                    >
                      <SearchIcon fontSize="medium" />
                    </IconButton>
                  </Typography>
                  <img
                    src={post.image}
                    width="40px"
                    height="40px"
                    style={{ borderRadius: '6px' }}
                  />
                </Box>
              </Link>
            ))
          ) : (
            <NoResults />
          )}
        </Paper>
      )}
    </Container>
  );
};

export default Search;
