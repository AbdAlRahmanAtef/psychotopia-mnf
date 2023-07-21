'use client';

import AdminBox from '@/components/AdminBox';
import Form from '@/components/Form';
import Sidebar from '@/components/Sidebar';
import { setAdmin } from '@/redux/slices/admin';
import { Container, Box, Button } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddAdmin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.email && formData.password && formData.role && formData.name) {
      try {
        setIsLoading(true);

        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/add-admin`,
          formData,
        );

        setFormData({
          name: '',
          email: '',
          password: '',
          role: '',
          confirmPassword: '',
        });

        router.push('/admin');
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
        type="addAdmin"
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        formData={formData}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default AddAdmin;
