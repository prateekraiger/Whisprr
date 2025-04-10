
import { ClerkProvider } from '@clerk/nextjs';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import React from 'react';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

type Props = {
  children: React.ReactNode;
};

const ConvexClientProviders = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <ConvexProvider client={convex}>
        {children}
      </ConvexProvider>
    </ClerkProvider>
  );
};

export default ConvexClientProviders;
