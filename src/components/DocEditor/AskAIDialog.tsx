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
import { LuSparkles } from 'react-icons/lu'

export default function AskAIDialog() {
  const triggerId = useId()

  return (
    <DialogRoot
      ids={{ trigger: triggerId }}
      lazyMount
      size={{ mdDown: 'full', md: 'lg' }}
    >
      <Tooltip ids={{ trigger: triggerId }} content="Ask AI">
        <DialogTrigger asChild>
          <Button variant="ghost" size="xs">
            <LuSparkles /> <Span hideBelow="md">Ask AI</Span>
          </Button>
        </DialogTrigger>
      </Tooltip>

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
