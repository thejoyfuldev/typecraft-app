import DocCard from '@/components/DocGrid/DocCard'
import { Doc } from '@/convex/_generated/dataModel'
import { Flex } from '@chakra-ui/react'

export default function DocGrid({ docs }: { docs: Doc<'docs'>[] }) {
  return (
    <Flex gap="6" flexWrap="wrap">
      {docs.map((doc) => (
        <DocCard key={doc._id} doc={doc} />
      ))}
    </Flex>
  )
}
