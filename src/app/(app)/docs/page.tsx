'use client'

import DocGrid from '@/components/DocGrid'
import DocsEmptyState from '@/components/DocsEmptyState'
import DocsLoading from '@/components/DocsLoading'
import NewDocButton from '@/components/NewDocButton'
import { Skeleton } from '@/components/ui/skeleton'
import { api } from '@/convex/_generated/api'
import { Heading, HStack, Stack } from '@chakra-ui/react'
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
      <HStack justify="space-between" align="start">
        <Skeleton loading={isLoading}>
          <Heading as="h2" textStyle="3xl">
            Docs
          </Heading>
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
