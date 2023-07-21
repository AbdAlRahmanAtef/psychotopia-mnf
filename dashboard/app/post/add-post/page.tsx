'use client';

/* eslint-disable @next/next/no-img-element */
import Header from 'components/Header';
import {
  Button,
  Box,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Sidebar from 'components/Sidebar';
import Dropzone from 'react-dropzone';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { MuiChipsInput } from 'mui-chips-input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';
import PostForm from '@/components/PostForm';

export const metadata: Metadata = {
  title: 'Add Post',
};

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image && title && description && tags && category) {
      setIsLoading(true);
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/posts/create`,
          { title, image, description, tags: tags.join(','), category },
        );

        console.log(data);
        router.push('/');
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <PostForm
      mode="add"
      title={title}
      setTitle={setTitle}
      handleSubmit={handleSubmit}
      tags={tags}
      setTags={setTags}
      category={category}
      setCategory={setCategory}
      image={image}
      setImage={setImage}
      previewImage={previewImage}
      setPreviewImage={setPreviewImage}
      description={description}
      setDescription={setDescription}
      isLoading={isLoading}
    />
  );
};

export default AddPost;
