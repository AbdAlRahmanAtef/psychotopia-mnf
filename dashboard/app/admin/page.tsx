'use client';

import AdminBox from '@/components/AdminBox';
import Loader from '@/components/Loader';
import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAdmins = async () => {
    try {
      setIsLoading(true);
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin`, {
        next: { revalidate: 10 },
      })
        .then((res) => res.json())
        .then((res) => setAdmins(res));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAdmins();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Stack sx={{ width: '100%', gap: 2 }}>
          {admins?.map((admin) => (
            <AdminBox admin={admin} key={admin._id} setAdmins={setAdmins} />
          ))}

          <Link href="/admin/add-admin">
            <Button
              sx={{ width: '100%', mt: 4, fontSize: '18px' }}
              variant="contained"
            >
              Add Admin
            </Button>
          </Link>
        </Stack>
      )}
    </Container>
  );
};

export default Admin;
