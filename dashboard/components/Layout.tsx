'use client';

import { Box, Container } from '@mui/material';
import React, { use, useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShow(false);
    });
  }, []);

  return (
    <Box>
      <Header setShow={setShow} show={show} />
      <Container>
        <Box
          sx={{
            direction: 'rtl',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 2,
            py: 6,
          }}
        >
          <Sidebar show={show} />
          <main style={{ flex: 1 }}>{children}</main>
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
