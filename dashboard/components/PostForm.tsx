/* eslint-disable @next/next/no-img-element */
'use client';

import { Box, TextField, Typography, IconButton, Button } from '@mui/material';
import { MuiChipsInput } from 'mui-chips-input';
import React from 'react';
import Dropzone from 'react-dropzone';
import Sidebar from './Sidebar';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const PostForm = ({
  mode,
  title,
  setTitle,
  handleSubmit,
  tags,
  setTags,
  category,
  setCategory,
  image,
  setImage,
  previewImage,
  setPreviewImage,
  description,
  setDescription,
  isLoading,
}) => {
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

  console.log({ image });

  const handleTagsChange = (newTags) => {
    setTags(newTags);
  };

  return (
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
        <MuiChipsInput value={tags} onChange={handleTagsChange} label="Tags" />

        <Button fullWidth onClick={handleSubmit} variant="contained">
          {isLoading
            ? 'Loading...'
            : `${mode === 'add' ? 'Add Post' : 'Update Post'}`}
        </Button>
      </form>
    </Box>
  );
};

export default PostForm;
