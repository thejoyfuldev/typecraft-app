import AskAIDialog from '@/components/DocEditor/AskAIDialog'
import BackButton from '@/components/DocEditor/BackButton'
import DocNameInput from '@/components/DocEditor/DocNameInput'
import GoalsDialog from '@/components/DocEditor/GoalsDialog'
import { Doc } from '@/convex/_generated/dataModel'
import { Box, Container, HStack } from '@chakra-ui/react'

export default function Header({ doc }: { doc: Doc<'docs'> }) {
  return (
    <Box h="14">
      <Container maxW="5xl" h="full">
        <HStack h="full" justify="space-between" align="center">
          <HStack flex="1">
            <BackButton size="sm" />
            <DocNameInput doc={doc} />
          </HStack>

          <HStack>
            <GoalsDialog />
            <AskAIDialog />
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}
