'use client';

import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/Layout';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
