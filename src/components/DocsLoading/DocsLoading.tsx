import { Skeleton } from '@/components/ui/skeleton'
import { Flex } from '@chakra-ui/react'

export default function DocsLoading({
  quantity,
}: {
  quantity: number
}) {
  return (
    <Flex gap="6" flexWrap="wrap">
      {Array(quantity)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} w="222px" h="182px" rounded="md" />
        ))}
    </Flex>
  )
}
