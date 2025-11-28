import { toaster } from '@/components/ui/toaster'
import { api } from '@/convex/_generated/api'
import { Button } from '@chakra-ui/react'
import { useMutation } from 'convex/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LuCirclePlus } from 'react-icons/lu'

export default function NewDocButton() {
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const createDoc = useMutation(api.docs.create)

  const handleCreateDoc = async (name?: string) => {
    setLoading(true)

    try {
      const docId = await createDoc({ name })
      router.push(`/docs/${docId}`)
    } catch (err) {
      toaster.error({
        title: 'Error',
        description: (err as Error).message,
      })
    } finally {
      setLoading(false)
    }
  }
  return (
    <Button
      size="sm"
      onClick={() => handleCreateDoc()}
      loading={loading}
    >
      <LuCirclePlus /> New Doc
    </Button>
  )
}
