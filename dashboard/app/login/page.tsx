'use client';

import Form from 'components/Form';
import { Container } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAdmin } from '@/redux/slices/admin';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      try {
        setIsLoading(true);

        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/login`,
          formData,
        );

        console.log(data);

        dispatch(setAdmin({ admin: data.admin, token: data.token }));
        router.push('/');
        setFormData({ email: '', password: '' });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Container>
      <Form
        type="login"
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        formData={formData}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default Login;
