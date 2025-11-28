import { Center } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Center h="100vh" overflow="none">
      {children}
    </Center>
  )
}
