'use client';

import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import './globals.css';
import Layout from '@/components/Layout';
import { usePathname } from 'next/navigation';
import Auth from '@/components/Auth';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isProtected = pathname === '/login' ? false : true;

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {isProtected ? (
            <Auth>
              <Layout>{children}</Layout>
            </Auth>
          ) : (
            children
          )}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
