import Editor from '@/components/DocEditor/Editor'
import Header from '@/components/DocEditor/Header'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import {
  Box,
  Center,
  Container,
  Flex,
  Spinner,
} from '@chakra-ui/react'
import { useQuery } from 'convex/react'

export default function DocEditor({ docId }: { docId: Id<'docs'> }) {
  const doc = useQuery(api.docs.get, { docId })
  const isLoading = doc === undefined

  if (isLoading) {
    return (
      <Center flex="1" h="full">
        <Spinner size="xl" />
      </Center>
    )
  }

  return (
    <Flex minH="100vh">
      <Flex
        direction="column"
        flex="1"
        flexShrink={0}
        minH="100vh"
        h="full"
      >
        <Box position="sticky" top="0" zIndex="docked" bg="bg.panel">
          <Header doc={doc} />
        </Box>

        <Container maxW="5xl" py="8" flex="1">
          <Box
            className="tiptap-wrapper"
            color="fg/75"
            textStyle="xl"
            lineHeight="tall"
            whiteSpace="pre-wrap"
            wordBreak="break-word"
            outline="none"
            minH="100px"
            p="1"
          >
            <Editor doc={doc} />
          </Box>
        </Container>
      </Flex>

      <Flex
        maxW="sm"
        w="full"
        position="sticky"
        top="0"
        h="100vh"
        hideBelow="lg"
        borderLeftWidth="1px"
        overflow="auto"
      >
        <></>
      </Flex>
    </Flex>
  )
}
