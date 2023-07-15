'use client';

import React, {
  useState,
  FC,
  FormEventHandler,
  SetStateAction,
  Dispatch,
} from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import Dropzone from 'react-dropzone';
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { AccountCircle, VisibilityOff, Visibility } from '@mui/icons-material';

const registerSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  password: yup.string().required('required'),
  location: yup.string().required('required'),
  occupation: yup.string().required('required'),
  picture: yup.string().required('required'),
});

const loginSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('required'),
  password: yup.string().required('required'),
});

const initialValuesRegister = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  location: '',
  occupation: '',
  picture: '',
};

const initialValuesLogin = {
  email: '',
  password: '',
};

interface IProps {
  handleSubmit: FormEventHandler;
  setFormData: Dispatch<SetStateAction<any>>;
  formData: any;
  isLoading: boolean;
}

const Form: FC<IProps> = ({
  handleSubmit,
  setFormData,
  formData,
  isLoading,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // const handleSubmit = async (values, onSubmitProps) => {
  //   if (isSignup) {
  //     const user = await register(values, onSubmitProps);
  //     if (user) {
  //       dispatch(setLogin({ user: user.userObj, token: user.token }));
  //     }
  //   } else {
  //     const user = await login(values, onSubmitProps);
  //     if (user) {
  //       dispatch(setLogin({ user: user.userObj, token: user.token }));
  //     }
  //   }
  //   router.push('/');
  // };
  return (
    <Container>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginTop: '40px',
          alignItems: 'center',
        }}
        onSubmit={handleSubmit}
      >
        {' '}
        <Typography sx={{ fontSize: '40px', fontWeight: 700 }}>
          Loin In
        </Typography>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
          <OutlinedInput
            id="input-with-icon-adornment"
            label="Email"
            endAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            value={formData.email || ''}
            onChange={(e) =>
              //@ts-ignore
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((show) => !show)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={formData.password || ''}
            onChange={(e) =>
              //@ts-ignore
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          fullWidth
          disabled={!(formData.email && formData.password.length > 7)}
        >
          {isLoading ? 'Loading...' : ' Log In'}
        </Button>
      </form>
    </Container>
  );
};

export default Form;
