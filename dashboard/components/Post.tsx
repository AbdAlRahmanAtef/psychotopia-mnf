'use client';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Post = ({ post }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/${post._id}`,
      );
      console.log('post deleted successfully');
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card sx={{ maxWidth: 'auto', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="auto"
          image={post.image}
          alt={post.title}
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            fontSize="20px"
            fontWeight={700}
            mb={2}
          >
            {post.title}
          </Typography>
          <Box overflow="hidden" mb="10px" position="relative">
            {post.description
              .split('\n')
              .slice(0, 5)
              .map((line, index) => (
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontWeight={500}
                  fontSize="16px"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  fontFamily={"'IBM Plex Sans Arabic', sans-serif"}
                  key={index}
                >
                  {line}
                </Typography>
              ))}
            ...
          </Box>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {post.tags?.map((tag) => (
              <Typography
                key={tag}
                sx={{
                  color: '#1976d2',
                  transition: '.3s',
                  cursor: 'pointer',
                  fontSize: '12px',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {tag}
              </Typography>
            ))}
          </Box>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link href={`/post/edit-post/${post._id}`}>
            <Button size="small" variant="contained" color="info">
              Edit
            </Button>
          </Link>

          <Button
            size="small"
            variant="contained"
            color="warning"
            onClick={() => setOpen(true)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Are you sure? </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="info"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            size="small"
            variant="contained"
            color="warning"
            onClick={handleDelete}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Post;
