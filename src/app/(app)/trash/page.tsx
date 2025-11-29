'use client'

import DocGrid from '@/components/DocGrid'
import DocsLoading from '@/components/DocsLoading'
import EmptyTrashButton from '@/components/EmptyTrashButton'
import TrashEmptyState from '@/components/TrashEmptyState'
import { Skeleton } from '@/components/ui/skeleton'
import { api } from '@/convex/_generated/api'
import { Box, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useQuery } from 'convex/react'

export default function Page() {
  const docs = useQuery(api.docs.listTrash)
  const isLoading = docs === undefined
  const isEmpty = docs?.length === 0
  const hasDocs = !!docs && docs.length > 0

  if (isEmpty) {
    return <TrashEmptyState />
  }

  return (
    <Stack gap="8" flex="1" h="full">
      <HStack justify="space-between" align="start">
        <Stack>
          <Skeleton loading={isLoading} w="fit">
            <Heading as="h2" textStyle="3xl">
              Trash
            </Heading>
          </Skeleton>

          <Skeleton loading={isLoading}>
            <Text color="fg.muted" textStyle="sm">
              Documents in the trash are available for 30 days before
              being automatically deleted.
            </Text>
          </Skeleton>
        </Stack>

        <Skeleton loading={isLoading}>
          <EmptyTrashButton />
        </Skeleton>
      </HStack>

      <Box flex="1" pb="10">
        {isLoading && <DocsLoading quantity={12} />}
        {hasDocs && <DocGrid docs={docs} />}
      </Box>
    </Stack>
  )
}
