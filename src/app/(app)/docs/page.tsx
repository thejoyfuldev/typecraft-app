'use client'

import DocGrid from '@/components/DocGrid'
import DocsEmptyState from '@/components/DocsEmptyState'
import DocsLoading from '@/components/DocsLoading'
import NewDocButton from '@/components/NewDocButton'
import SearchDocsInput from '@/components/SearchDocsInput'
import { Skeleton } from '@/components/ui/skeleton'
import { api } from '@/convex/_generated/api'
import { Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useQuery } from 'convex/react'

export default function Page() {
  const docs = useQuery(api.docs.list)
  const isLoading = docs === undefined
  const isEmpty = docs?.length === 0
  const hasDocs = !!docs && docs.length > 0

  if (isEmpty) {
    return <DocsEmptyState />
  }

  return (
    <Stack gap="8" flex="1" h="full">
      <Stack>
        <Skeleton loading={isLoading} w="fit">
          <Heading as="h2" textStyle="3xl">
            Docs
          </Heading>
        </Skeleton>
        <Skeleton loading={isLoading} w="fit">
          <Text color="fg.muted" textStyle="sm">
            Manage your awards, performance briefs, and decorations.
          </Text>
        </Skeleton>
      </Stack>

      <HStack align="center" justify="space-between" gap="4">
        <Skeleton loading={isLoading} maxW="xl" w="full">
          <SearchDocsInput />
        </Skeleton>

        <Skeleton loading={isLoading}>
          <NewDocButton />
        </Skeleton>
      </HStack>

      {isLoading && <DocsLoading quantity={12} />}
      {hasDocs && <DocGrid docs={docs} />}
    </Stack>
  )
}
