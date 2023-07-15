/* eslint-disable @next/next/no-img-element */
'use client';

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Stack,
  Button,
  Collapse,
  ListItem,
  List,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setAdmin } from 'redux/slices/admin';
import { RootState } from 'redux/store';

interface IProps {
  title: string;
  image: any;
  icon: any;
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '6px',
  backgroundColor: alpha('#016fc8', 0.9),
  '&:hover': {
    backgroundColor: alpha('#016fc8', 1),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#fff',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header: FC<IProps> = ({ title, image, icon }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { admin, token } = useSelector((state: RootState) => state.admin);

  return (
    <Box
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
      {image && (
        <img
          src={image.src}
          alt={title}
          style={{ height: '60px', borderRadius: '50%' }}
        />
      )}

      {icon && <>{icon}</>}
      {admin && admin.image ? (
        <img src={admin.image} alt={admin.name.slice(0, 3)} />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
        >
          <path
            fill="#016fc8"
            d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11Z"
          />
        </svg>
      )}
      {/* <Stack
        direction="row"
        gap={2}
        alignItems="center"
        flex={1}
        justifyContent="right"
      >
        {' '}
        <Search>
          <SearchIconWrapper>
            <SearchIcon fill="#fff" sx={{ color: '#fff' }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="right"
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          <Button variant="contained" sx={{ fontWeight: 500 }}>
            About Us
          </Button>
        </Stack>
        <Box
          className={`burger-icon  ${showMenu && 'close'}`}
          sx={{ display: { sm: 'none' } }}
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
      </Collapse> */}
    </Box>
  );
};

export default Header;
