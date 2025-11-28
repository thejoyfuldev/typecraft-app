'use client'

import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { toaster } from '@/components/ui/toaster'
import { api } from '@/convex/_generated/api'
import { Button, ButtonProps } from '@chakra-ui/react'
import { useMutation } from 'convex/react'
import { useState } from 'react'
import { LuTrash2 } from 'react-icons/lu'

export default function EmptyTrashButton(buttonProps: ButtonProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const emptyTrash = useMutation(api.docs.emptyTrash)

  const handleEmptyTrash = async () => {
    setLoading(true)

    try {
      await emptyTrash()
      toaster.success({
        title: 'Success',
        description: 'Trash emptied.',
      })
    } catch (err) {
      toaster.error({
        title: 'Error',
        description: (err as Error).message,
      })
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <DialogRoot
      lazyMount
      role="alertdialog"
      open={open}
      onOpenChange={({ open }) => setOpen(open)}
    >
      <DialogTrigger asChild>
        <Button
          size="sm"
          onClick={() => setOpen(true)}
          {...buttonProps}
        >
          <LuTrash2 /> Empty trash
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          This will permanently delete all documents in the trash and
          cannot be undone.
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button
            colorPalette="red"
            loading={loading}
            onClick={() => handleEmptyTrash()}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  )
}
