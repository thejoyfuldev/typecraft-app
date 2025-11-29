'use client'

import { toaster } from '@/components/ui/toaster'
import { api } from '@/convex/_generated/api'
import { Doc } from '@/convex/_generated/dataModel'
import { useMutation } from 'convex/react'
import { useRouter } from 'next/navigation'

export function useDocActions(doc: Doc<'docs'>) {
  const router = useRouter()
  const moveToTrash = useMutation(api.docs.moveToTrash)
  const undo = useMutation(api.docs.restore)
  const permanentlyDelete = useMutation(api.docs.permanentlyDelete)

  const docName = doc.name || 'Untitled doc'

  const handleMoveToTrash = async () => {
    try {
      await moveToTrash({ docId: doc._id })
      toaster.success({
        title: 'Success',
        description: `Moved "${docName}" to trash.`,
        action: {
          label: 'Undo',
          onClick: async () => {
            try {
              await handleUndo()
            } catch (err) {
              toaster.error({
                title: 'Error',
                description:
                  err instanceof Error
                    ? err.message
                    : 'An error occurred',
              })
            }
          },
        },
      })
    } catch (err) {
      toaster.error({
        title: 'Error',
        description:
          err instanceof Error ? err.message : 'An error occurred',
      })
    }
  }

  const handleUndo = async () => {
    try {
      await undo({ docId: doc._id })
      toaster.success({
        title: 'Success',
        description: `Restored "${docName}" to docs.`,
        action: {
          label: 'Open',
          onClick: () => router.push(`/docs/${doc._id}`),
        },
      })
    } catch (err) {
      toaster.error({
        title: 'Error',
        description:
          err instanceof Error ? err.message : 'An error occurred',
      })
    }
  }

  const handlePermanentlyDelete = async () => {
    try {
      await permanentlyDelete({ docId: doc._id })
      toaster.success({
        title: 'Success',
        description: `"${docName}" was permanently deleted.`,
      })
    } catch (err) {
      toaster.error({
        title: 'Error',
        description:
          err instanceof Error ? err.message : 'An error occurred',
      })
    }
  }

  return { handleMoveToTrash, handlePermanentlyDelete, handleUndo }
}
