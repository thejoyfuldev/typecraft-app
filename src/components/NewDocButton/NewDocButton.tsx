import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu'
import { toaster } from '@/components/ui/toaster'
import { api } from '@/convex/_generated/api'
import { DOC_TYPES } from '@/convex/constants'
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { useMutation } from 'convex/react'
import { Infer } from 'convex/values'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LuChevronDown, LuCirclePlus } from 'react-icons/lu'

export default function NewDocButton() {
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const createDoc = useMutation(api.docs.create)

  const handleCreateDoc = async (
    name = '',
    type: Infer<typeof DOC_TYPES> = 'performance'
  ) => {
    setLoading(true)

    try {
      const docId = await createDoc({ name, type })
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
    <MenuRoot
      onSelect={({ value }) => {
        const docType = value as Infer<typeof DOC_TYPES>
        handleCreateDoc('', docType)
      }}
    >
      <ButtonGroup size="sm" attached>
        <Button onClick={() => handleCreateDoc()} loading={loading}>
          <LuCirclePlus /> New Doc
        </Button>
        <MenuTrigger asChild>
          <IconButton>
            <LuChevronDown />
          </IconButton>
        </MenuTrigger>
      </ButtonGroup>
      <MenuContent>
        <MenuItem value="performance">Performance Brief</MenuItem>
        <MenuItem value="award">Award</MenuItem>
        <MenuItem value="decoration">Decoration</MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}
