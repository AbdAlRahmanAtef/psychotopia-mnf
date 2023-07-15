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

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 24 24"
  >
    <path
      fill="#016fc8"
      d="M12 19q-.425 0-.713-.288T11 18v-5H6q-.425 0-.713-.288T5 12q0-.425.288-.713T6 11h5V6q0-.425.288-.713T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19Z"
    />
  </svg>
);

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

  const imageToBase64 = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (file) => {
    if (file) {
      const base64 = await imageToBase64(file);
      setImage(base64);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleTagsChange = (newTags) => {
    setTags(newTags);
  };
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
    <Container>
      <Header title="Add Post" image="" icon={icon} />
      <Box
        sx={{
          direction: 'rtl',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
          py: 6,
        }}
      >
        <Sidebar />
        <Box flex={1}>
          <form
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Title"
              value={title}
              fullWidth
              dir="rtl"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Box
              gridColumn="span 4"
              border={`1px solid #777`}
              borderRadius="5px"
              p="1rem"
            >
              <Dropzone
                //@ts-ignore
                acceptedFiles=".jpg,.jpeg,.png,.jfif"
                multiple={false}
                onDrop={(acceptedFiles) => handleImageUpload(acceptedFiles[0])}
              >
                {({ getRootProps, getInputProps }) => (
                  <Box
                    {...getRootProps()}
                    border={`2px dashed #777`}
                    p="1rem"
                    sx={{ '&:hover': { cursor: 'pointer' } }}
                  >
                    <input {...getInputProps()} />
                    {!image ? (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: 2,
                          alignItems: 'center',
                        }}
                      >
                        <Typography>Add Picture Here</Typography>
                        <IconButton>
                          <EditOutlinedIcon />
                        </IconButton>
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: 2,
                          alignItems: 'start',
                        }}
                      >
                        <img
                          src={previewImage}
                          alt=""
                          style={{
                            height: '100px',
                            borderRadius: '8px',
                          }}
                        />
                        <IconButton>
                          <EditOutlinedIcon />
                        </IconButton>
                      </Box>
                    )}
                  </Box>
                )}
              </Dropzone>
            </Box>
            <TextField
              multiline
              minRows={2}
              dir="rtl"
              value={description}
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              value={category}
              label="Category"
              dir="rtl"
              onChange={(e) => setCategory(e.target.value)}
            />
            <MuiChipsInput
              value={tags}
              onChange={handleTagsChange}
              label="Tags"
            />

            <Button fullWidth onClick={handleSubmit} variant="contained">
              {isLoading ? 'Loading...' : 'Add Post'}
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default AddPost;
