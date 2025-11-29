import Navbar from '@/components/AppLayout/Navbar'
import Sidebar from '@/components/AppLayout/Sidebar'
import { Box, Container, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function AppLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <Flex flexDir="column" h="100vh">
      <Box position="sticky" top="0" zIndex="docked" flexShrink={0}>
        <Navbar />
      </Box>

      <Flex flex="1" minH="0">
        <Sidebar w="280px" position="sticky" top="0" hideBelow="lg" />

        <Flex flex="1" minW="0" minH="0" overflow="auto">
          <Container pt="10" pb="16" flex="1" maxW="5xl">
            {children}
          </Container>
        </Flex>
      </Flex>
    </Flex>
  )
}
