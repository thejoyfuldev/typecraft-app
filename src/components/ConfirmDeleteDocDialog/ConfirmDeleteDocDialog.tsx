'use client'

import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button, DialogRootProps, Text } from '@chakra-ui/react'

interface ConfirmDeleteDocDialogProps extends Omit<
  DialogRootProps,
  'children'
> {
  docName: string
  onConfirm: () => void
}

export default function ConfirmDeleteDocDialog({
  docName,
  onConfirm,
  ...delegated
}: ConfirmDeleteDocDialogProps) {
  return (
    <DialogRoot {...delegated} role="alertdialog">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete permanently?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Text>
            Are you sure you want to permanently delete{' '}
            {`"${docName}"`}? This action cannot be undone.
          </Text>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button colorPalette="red" onClick={() => onConfirm()}>
            Delete Permanently
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}
