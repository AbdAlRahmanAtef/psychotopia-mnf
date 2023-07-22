'use client';

import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

// hello
const AdminBox = ({ admin, setAdmins }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleDeleteAdmin = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/${admin._id}`,
      );

      setAdmins(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {' '}
      <Paper
        sx={{
          p: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          direction: 'ltr',
          width: '100%',
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ backgroundColor: '#1976d2' }}>
            {admin.name.slice(0, 2)}
          </Avatar>
          <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
            {admin.name}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography textTransform="lowercase">
            {admin.email.toLowerCase()}
          </Typography>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => setShow(true)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </Paper>
      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Are You sure?'}</DialogTitle>
        <DialogActions
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Button variant="contained" color="info" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={handleDeleteAdmin}
            autoFocus
          >
            {isLoading ? 'Loading...' : 'Yes'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdminBox;
