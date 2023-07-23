/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { setAdmin } from '@/redux/slices/admin';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const Auth = ({ children }) => {
  const { admin, token } = useSelector((state: RootState) => state.admin);
  const [isAdmin, setIsAdmin] = useState(true);
  const dispatch = useDispatch();

  const getAdmin = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/${admin._id}`,
      );

      setIsAdmin(data);
      if (!isAdmin) {
        dispatch(setAdmin({ admin: null, token: null }));
      }
    } catch (error) {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    getAdmin();
  }, [token]);

  if (token === '' || !isAdmin) {
    redirect('/login');
  } else {
    return children;
  }
};

export default Auth;
