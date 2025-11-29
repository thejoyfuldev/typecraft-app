'use client'

import DocEditor from '@/components/DocEditor'
import { Id } from '@/convex/_generated/dataModel'
import { Box } from '@chakra-ui/react'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams<{ docId: Id<'docs'> }>()
  const { docId } = params

  return (
    <Box
      h="100vh"
      overflow="auto"
      position="relative"
      w="full"
      scrollbarGutter="stable"
    >
      <DocEditor docId={docId} />
    </Box>
  )
}
