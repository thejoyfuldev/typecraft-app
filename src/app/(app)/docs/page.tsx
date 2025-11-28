'use client'

import DocGrid from '@/components/DocGrid'
import DocsLoading from '@/components/DocsLoading'
import { api } from '@/convex/_generated/api'
import { Flex, Heading, HStack, Stack } from '@chakra-ui/react'
import { useQuery } from 'convex/react'

export default function Page() {
  const docs = useQuery(api.docs.list)

  return (
    <Stack gap="8" flex="1" h="full">
      <HStack justify="space-between" align="start">
        <Heading as="h2" textStyle="3xl">
          Docs
        </Heading>
      </HStack>

      {!docs ? (
        <Flex gap="6" flexWrap="wrap">
          <DocsLoading quantity={12} />
        </Flex>
      ) : (
        <DocGrid docs={docs} />
      )}
    </Stack>
  )
}
