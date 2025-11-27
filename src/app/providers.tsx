import { Provider as UIProvider } from '@/components/ui/provider'
import { env } from '@/lib/env'
import { ClerkProvider } from '@clerk/nextjs'
import { PropsWithChildren } from 'react'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ClerkProvider
      publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <UIProvider>{children}</UIProvider>
    </ClerkProvider>
  )
}
