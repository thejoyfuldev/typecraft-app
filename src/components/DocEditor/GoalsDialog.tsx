import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button, Span } from '@chakra-ui/react'
import { LuTarget } from 'react-icons/lu'

export default function GoalsDialog() {
  return (
    <DialogRoot lazyMount size={{ mdDown: 'full', md: 'lg' }}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="xs">
          <LuTarget /> <Span hideBelow="md">Goals</Span>
        </Button>
      </DialogTrigger>
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
