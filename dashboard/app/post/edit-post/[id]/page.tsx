'use client';

import PostForm from '@/components/PostForm';
import { Container } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const EditPost = ({ params }) => {
  const [post, setPost] = useState(null);
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
        const { data } = await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}/posts/update`,
          {
            _id: post._id,
            title,
            image,
            description,
            tags: tags.join(','),
            category,
          },
        );

        router.push('/');
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getPost = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`,
      );

      setPost(data);
      setTitle(data.title);
      setCategory(data.category);
      setDescription(data.description);
      setImage(data.image);
      setPreviewImage(data.image);
      setTags(data.tags);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      <PostForm
        mode="update"
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
    </Container>
  );
};

export default EditPost;
