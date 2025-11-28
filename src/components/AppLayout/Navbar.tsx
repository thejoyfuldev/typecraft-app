import { MobileSidebar } from '@/components/AppLayout/MobileSidebar'
import Logo from '@/components/Logo'
import { Box, BoxProps, Container, HStack } from '@chakra-ui/react'
import { UserButton } from '@clerk/nextjs'

export default function Navbar(props: BoxProps) {
  return (
    <Box h="14" borderBottomWidth="1px" bg="bg.panel" {...props}>
      <Container fluid h="full">
        <HStack h="full" align="center" justify="space-between">
          <HStack align="center" h="full">
            <MobileSidebar />

            <Box hideBelow="lg">
              <Logo />
            </Box>
          </HStack>

          <Box hideFrom="lg">
            <UserButton />
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}
