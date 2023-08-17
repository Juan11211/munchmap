"use client"
import React from 'react';
import { SessionProvider } from 'next-auth/react'; // Don't forget to import useSession

// Our app won't run if not authenticated.
function Provider({ children }) {

  // You can use 'session' and 'loading' here to determine authentication status
  // For example:
 

  return (
    <SessionProvider >
      {children}
    </SessionProvider>
  );
}

export default Provider;
