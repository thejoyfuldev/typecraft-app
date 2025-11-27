import { Provider as UIProvider } from '@/components/ui/provider'
import { PropsWithChildren } from 'react'

export function Providers({ children }: PropsWithChildren) {
  return <UIProvider>{children}</UIProvider>
}
