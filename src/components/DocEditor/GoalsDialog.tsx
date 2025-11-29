import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tooltip } from '@/components/ui/tooltip'
import { Button, Span } from '@chakra-ui/react'
import { useId } from 'react'
import { LuTarget } from 'react-icons/lu'

export default function GoalsDialog() {
  const triggerId = useId()

  return (
    <DialogRoot
      ids={{ trigger: triggerId }}
      lazyMount
      size={{ mdDown: 'full', md: 'lg' }}
    >
      <Tooltip ids={{ trigger: triggerId }} content="Goals">
        <DialogTrigger asChild>
          <Button variant="ghost" size="xs">
            <LuTarget /> <Span hideBelow="md">Goals</Span>
          </Button>
        </DialogTrigger>
      </Tooltip>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Goals</DialogTitle>
        </DialogHeader>
        <DialogBody></DialogBody>
        <DialogCloseTrigger colorPalette="gray" />
      </DialogContent>
    </DialogRoot>
  )
}
