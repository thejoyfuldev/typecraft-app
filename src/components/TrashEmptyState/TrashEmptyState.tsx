import { EmptyState } from '@/components/ui/empty-state'
import { Center } from '@chakra-ui/react'
import { LuTrash2 } from 'react-icons/lu'

export default function TrashEmptyState() {
  return (
    <Center h="full">
      <EmptyState
        size="lg"
        title="Trash is empty"
        description="Deleted documents are available here for 30 days."
        icon={<LuTrash2 />}
      />
    </Center>
  )
}
