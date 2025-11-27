'use client'

import { Provider as UIProvider } from '@/components/ui/provider'
import { env } from '@/lib/env'
import { ClerkLoaded, ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { PropsWithChildren } from 'react'

const convex = new ConvexReactClient(env.NEXT_PUBLIC_CONVEX_URL!)

export function Providers({ children }: PropsWithChildren) {
  return (
    <ClerkProvider
      publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ClerkLoaded>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          <UIProvider>{children}</UIProvider>
        </ConvexProviderWithClerk>
      </ClerkLoaded>
    </ClerkProvider>
  )
}
