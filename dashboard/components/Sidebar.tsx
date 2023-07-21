'use client';

import { Button, List, ListItem, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LINKS = [
  {
    href: '/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentcolor"
          d="M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-1 6H5v-4h4ZM20 3h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 6h-4V5h4Zm1 7h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2ZM10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM9 9H5V5h4Z"
        />
      </svg>
    ),
    title: 'Dashboard',
  },
  {
    href: '/post/add-post',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentcolor"
          d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
        />
      </svg>
    ),
    title: 'Add Post',
  },
  {
    href: '/admin',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          id="eosIconsAdmin0"
          fill="currentColor"
          d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5Zm0 3.9a3 3 0 1 1-3 3a3 3 0 0 1 3-3Zm0 7.9c2 0 6 1.09 6 3.08a7.2 7.2 0 0 1-12 0c0-1.99 4-3.08 6-3.08Z"
        />
      </svg>
    ),
    title: 'Admin',
  },
];

const Sidebar = ({ show }) => {
  const pathname = usePathname();

  return (
    <Stack
      sx={{
        transition: '.3s',
        width: 'fit-content',
        boxShadow: '3px 30px 10px #ddd',
        minHeight: '500px',
        height: 'fit-content',
        display: 'flex',
        position: { xs: 'fixed', sm: 'relative' },
        right: 0,
        transform: {
          xs: `translateX(${show ? '0' : '100%'})`,
          sm: 'translateX(0)',
        },
        top: { xs: '140px', sm: '0' },
        backgroundColor: '#ffffff',
        zIndex: 6,
      }}
    >
      <List>
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            <ListItem>
              <Button
                endIcon={link.icon}
                fullWidth
                variant={pathname === `${link.href}` ? 'contained' : 'text'}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Typography> {link.title}</Typography>
              </Button>
            </ListItem>
          </Link>
        ))}
      </List>
    </Stack>
  );
};

export default Sidebar;
