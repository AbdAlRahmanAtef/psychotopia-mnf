'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import PostForm from '@/components/PostForm';

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

        router.push('/');
        setIsLoading(false);
      } catch (err) {
        console.error(err);
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
