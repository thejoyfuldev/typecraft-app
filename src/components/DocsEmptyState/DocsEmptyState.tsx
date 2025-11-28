import NewDocButton from '@/components/NewDocButton'
import { EmptyState } from '@/components/ui/empty-state'
import { Center } from '@chakra-ui/react'
import { LuFile } from 'react-icons/lu'

export default function DocsEmptyState() {
  return (
    <Center h="full">
      <EmptyState
        size="lg"
        title="No docs yet"
        description="Create your first performance brief, award, or decoration."
        icon={<LuFile />}
      >
        <NewDocButton />
      </EmptyState>
    </Center>
  )
}
