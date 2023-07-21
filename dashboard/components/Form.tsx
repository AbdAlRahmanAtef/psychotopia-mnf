/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, {
  useState,
  FC,
  FormEventHandler,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react';
import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import { AccountCircle, VisibilityOff, Visibility } from '@mui/icons-material';

const roles = [
  {
    value: 'head',
    label: 'Head',
  },
  {
    value: 'leader',
    label: 'Leader',
  },
];

interface IProps {
  handleSubmit: FormEventHandler;
  setFormData: Dispatch<SetStateAction<any>>;
  formData: any;
  isLoading: boolean;
  type: string;
}

const Form: FC<IProps> = ({
  handleSubmit,
  setFormData,
  formData,
  isLoading,
  type = 'login',
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<any>({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (formData) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (type === 'addAdmin') {
      if (!formData.name) {
        errors.name = 'name is required!';
      }
      if (!formData.role) {
        errors.role = 'role is required!';
      }

      if (formData.confirmPassword !== formData.password) {
        errors.confirmPassword = 'Password must be matched';
      }
    }

    if (!formData.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(formData.email)) {
      errors.email = 'This is not a valid email format!';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 7) {
      errors.password = 'Password must be more than 7 characters';
    } else if (formData.password.length > 15) {
      errors.password = 'Password cannot exceed more than 15 characters';
    }
    return errors;
  };

  useEffect(() => {
    setFormErrors(validate(formData));
  }, [formData]);

  console.log({ formData, formErrors });

  return (
    <Container>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginTop: '40px',
          alignItems: 'center',
          direction: 'ltr',
        }}
        onSubmit={handleSubmit}
      >
        {' '}
        <Typography sx={{ fontSize: '40px', fontWeight: 700 }}>
          {type === 'login' ? 'Login' : 'Add Admin'}
        </Typography>
        {type === 'addAdmin' && (
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="input-with-icon-adornment">
              UserName
            </InputLabel>
            <OutlinedInput
              id="input-with-icon-adornment"
              label="Username"
              name="name"
              endAdornment={
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              }
              value={formData.name || ''}
              onChange={handleChange}
            />
            <Typography color="error" fontSize="14px">
              {formErrors.name}
            </Typography>
          </FormControl>
        )}
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
          <OutlinedInput
            id="input-with-icon-adornment"
            name="email"
            label="Email"
            endAdornment={
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            }
            value={formData.email || ''}
            onChange={handleChange}
          />
          <Typography color="error" fontSize="14px">
            {formErrors.email}
          </Typography>
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
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
            onChange={handleChange}
          />
          <Typography color="error" fontSize="14px">
            {formErrors.password}
          </Typography>
        </FormControl>
        {type === 'addAdmin' && (
          <>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                name="confirmPassword"
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
                value={formData.confirmPassword || ''}
                onChange={handleChange}
              />
              <Typography color="error" fontSize="14px">
                {formErrors.confirmPassword}
              </Typography>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Admin Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="role"
                value={formData.role}
                label="Admin Role"
                onChange={handleChange}
              >
                {roles.map((role) => (
                  <MenuItem key={role.value} value={role.value}>
                    {role.label}
                  </MenuItem>
                ))}
              </Select>
              <Typography color="error" fontSize="14px">
                {formErrors.role}
              </Typography>
            </FormControl>
          </>
        )}
        <Button
          variant="contained"
          type="submit"
          fullWidth
          disabled={Object.keys(formErrors).length === 0 ? false : true}
        >
          {isLoading
            ? 'Loading...'
            : type === 'addAdmin'
            ? 'Add Admin'
            : ' Log In'}
        </Button>
      </form>
    </Container>
  );
};

export default Form;
