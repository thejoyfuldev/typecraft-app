'use client'

import { api } from '@/convex/_generated/api'
import { Doc } from '@/convex/_generated/dataModel'
import { Input } from '@chakra-ui/react'
import { useMutation } from 'convex/react'
import { FormEvent } from 'react'

export default function DocNameInput({ doc }: { doc: Doc<'docs'> }) {
  const updateDoc = useMutation(api.docs.updateDoc)

  const handleBlur = async (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value
    if (!doc || name === doc.name) return
    await updateDoc({ docId: doc._id, update: { name } })
  }

  return (
    <Input
      size="xs"
      fontSize="md"
      outline="none"
      cursor="pointer"
      rounded="md"
      border="none"
      fontWeight="semibold"
      placeholder="Untitled doc"
      overflow="hidden"
      textOverflow="ellipsis"
      _hover={{
        bg: 'bg.muted',
      }}
      defaultValue={doc?.name}
      onBlur={handleBlur}
    />
  )
}
