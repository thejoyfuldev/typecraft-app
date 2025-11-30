'use client'

import { api } from '@/convex/_generated/api'
import { Doc } from '@/convex/_generated/dataModel'
import { useDebounce } from '@uidotdev/usehooks'
import { useMutation } from 'convex/react'
import { Plate, PlateContent, usePlateEditor } from 'platejs/react'
import { useEffect, useState } from 'react'

export default function Editor({ doc }: { doc: Doc<'docs'> }) {
  const updateDoc = useMutation(api.docs.updateDoc)

  const editor = usePlateEditor({
    value: () => doc.content ?? [],
  })

  const [content, setContent] = useState(doc?.content ?? [])

  const debouncedContent = useDebounce(content, 1500)

  useEffect(() => {
    if (!debouncedContent) return

    const handleUpdate = async () => {
      const firstChildWithText = debouncedContent.filter(
        (f) => f.children[0].text.trim() !== ''
      )
      const description =
        firstChildWithText.length > 0
          ? firstChildWithText[0].children[0].text.trim()
          : ''

      try {
        await updateDoc({
          docId: doc._id,
          update: { content: debouncedContent, description },
        })
      } catch (err) {
        console.log((err as Error).message)
      }
    }

    handleUpdate()
  }, [debouncedContent, doc._id, updateDoc])

  return (
    <Plate
      editor={editor}
      onChange={({ value }) => setContent(value)}
    >
      <PlateContent
        style={{
          outline: 'none',
          paddingBottom: '20vh',
        }}
        placeholder="Type of paste (⌘+V) your text here."
      />
    </Plate>
  )
}
