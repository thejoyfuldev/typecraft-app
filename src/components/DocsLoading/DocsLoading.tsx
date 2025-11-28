import { Skeleton } from '@/components/ui/skeleton'

export default function DocsLoading({
  quantity,
}: {
  quantity: number
}) {
  return (
    <>
      {Array(quantity)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} w="222px" h="182px" rounded="md" />
        ))}
    </>
  )
}
