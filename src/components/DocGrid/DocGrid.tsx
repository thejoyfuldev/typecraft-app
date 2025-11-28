import DocCard from '@/components/DocGrid/DocCard'
import { EmptyState } from '@/components/ui/empty-state'
import { Doc } from '@/convex/_generated/dataModel'
import { Flex } from '@chakra-ui/react'
import { LuFile } from 'react-icons/lu'

export default function DocGrid({ docs }: { docs: Doc<'docs'>[] }) {
  return (
    <>
      {docs.length === 0 ? (
        <EmptyState
          size="lg"
          title="No docs yet"
          description="Create your first performance brief, award, or decoration."
          icon={<LuFile />}
        />
      ) : (
        <Flex flex="1" gap="6" flexWrap="wrap">
          {docs.map((doc) => (
            <DocCard key={doc._id} doc={doc} />
          ))}
        </Flex>
      )}
    </>
  )
}
