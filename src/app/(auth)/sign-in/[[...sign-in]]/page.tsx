import { Center } from '@chakra-ui/react'
import { SignIn } from '@clerk/nextjs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign-in',
}

export default function Page() {
  return (
    <Center minH="100vh">
      <SignIn />
    </Center>
  )
}
