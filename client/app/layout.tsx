'use client';

import './globals.css';
import Header from '@/components/Header';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from 'next-themes';
import { Metadata } from 'next';
import ThemeContextProvider from '@/context/ThemeContext';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ThemeContextProvider>
            <CssBaseline />
            <Header />
            <main className="main">{children}</main>
            <Footer />
          </ThemeContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
