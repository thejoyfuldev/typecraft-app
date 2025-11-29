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
import { LuSparkles } from 'react-icons/lu'

export default function AskAIDialog() {
  return (
    <DialogRoot lazyMount size={{ mdDown: 'full', md: 'lg' }}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="xs">
          <LuSparkles /> <Span hideBelow="md">Ask AI</Span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Typecraft AI</DialogTitle>
        </DialogHeader>
        <DialogBody></DialogBody>
        <DialogCloseTrigger colorPalette="gray" />
      </DialogContent>
    </DialogRoot>
  )
}
