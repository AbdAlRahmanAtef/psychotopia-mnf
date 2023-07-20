'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  InputBase,
  Stack,
  Button,
  Collapse,
  ListItem,
  List,
  IconButton,
  Typography,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import logoDark from 'assets/Logo-dark.svg';
import logoLight from 'assets/Logo-light.svg';
import DarkModeButton from './DarkModeButton';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 16px',
        borderRadius: '6px',
        gap: 2,
        boxShadow: 1,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src={resolvedTheme === 'dark' ? logoDark : logoLight}
        alt=""
        width={70}
        height={70}
        style={{ height: '70px', borderRadius: '50%', cursor: 'pointer' }}
        onClick={() => router.push('/')}
      />
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        flex={1}
        justifyContent="right"
      >
        {' '}
        <Link href="/search">
          <Typography
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              opacity: '.8',
              gap: 2,
              padding: '10px 16px',
              borderRadius: '8px',
              backgroundColor: 'background.paper',
              border: '1px solid #545c62',
            }}
          >
            <Typography width="100px">Search...</Typography>
            <SearchIcon fill="text.primary" />
          </Typography>
          <IconButton
            sx={{ color: 'text.primary', display: { xs: 'block', sm: 'none' } }}
          >
            <SearchIcon fill="text.primary" />
          </IconButton>
        </Link>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="right"
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          <Link href="/about">
            <Button
              variant="text"
              sx={{
                fontSize: '16px',
                fontWeight: '700',
                borderRadius: '100px',
                color: 'text.primary',
              }}
            >
              About Us
            </Button>
          </Link>
        </Stack>
        <Box
          onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        >
          <DarkModeButton />
        </Box>
        <Box
          className={`burger-icon  ${showMenu && 'close'}`}
          sx={{ display: { sm: 'block', md: 'none' } }}
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Box>
      </Stack>

      <Collapse
        in={showMenu}
        sx={{
          position: 'absolute',
          top: '100%',
          left: 0,
          zIndex: 2,
          display: { sm: 'none' },
        }}
      >
        <List>
          <ListItem>About Us</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>About Us</ListItem>
        </List>
      </Collapse>
    </Box>
  );
};

export default Header;
