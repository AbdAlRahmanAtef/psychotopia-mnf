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
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <Stack
      sx={{
        transition: 'width 3000',
        width: 'fit-content',
        boxShadow: '3px 30px 10px #ddd',
        minHeight: '500px',
        height: 'fit-content',
      }}
    >
      <List
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
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
                <Typography
                  sx={{
                    display: {
                      xs: expanded ? 'block' : 'none',
                      sm: 'block',
                    },
                  }}
                >
                  {' '}
                  {link.title}
                </Typography>
              </Button>
            </ListItem>
          </Link>
        ))}
      </List>
    </Stack>
  );
};

export default Sidebar;
