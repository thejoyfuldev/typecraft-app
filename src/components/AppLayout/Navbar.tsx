import { MobileSidebar } from '@/components/AppLayout/MobileSidebar'
import Logo from '@/components/Logo'
import { ColorModeButton } from '@/components/ui/color-mode'
import { Box, BoxProps, Container, HStack } from '@chakra-ui/react'

export default function Navbar(props: BoxProps) {
  return (
    <Box h="14" borderBottomWidth="1px" bg="bg.panel" {...props}>
      <Container fluid h="full">
        <HStack h="full" align="center" justify="space-between">
          <Logo />

          <HStack gap="2">
            <ColorModeButton colorPalette="gray" />
            <MobileSidebar />
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}
