/* eslint-disable @next/next/no-img-element */
'use client';

import * as React from 'react';
import { Box, Typography, Avatar, Paper, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import Logo from 'assets/logo.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = ({ show, setShow }) => {
  const { admin, token } = useSelector((state: RootState) => state.admin);
  const pathname = usePathname();

  return (
    <>
      <Paper
        sx={{
          boxShadow: '3px 5px 10px 0px rgba(236, 176, 176, 0.5)',
          display: pathname === '/login' ? 'none' : 'block',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#fff',
            padding: '8px 16px',
            borderRadius: '6px',
            mt: '20px',
            gap: 2,
            boxShadow: '3px 5px 10px 0px rgba(236, 176, 176, 0.5)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Link href="/">
            {' '}
            <img
              src={Logo.src}
              alt=""
              style={{ height: '60px', borderRadius: '50%' }}
            />
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar>{admin?.name.slice(0, 2)}</Avatar>
              {admin?.name}
            </Typography>
            <Box
              className={`burger-icon  ${show && 'close'}`}
              sx={{ display: { xs: 'block', sm: 'none' } }}
              onClick={() => setShow((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </Box>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default Header;
