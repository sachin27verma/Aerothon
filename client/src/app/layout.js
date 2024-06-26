// src/layout/RootLayout.js
import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Navbarhead from "@/components/Navbar/Navbar";
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* You can add additional metadata here */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <NextUIProvider>
          <AuthProvider> {/* Wrap your app with AuthProvider */}
            <Navbarhead />
            {children}
            <Footer/>
          </AuthProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}

export default RootLayout;
