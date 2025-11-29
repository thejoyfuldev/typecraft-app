import { Button, ButtonProps, Span } from '@chakra-ui/react'
import Link from 'next/link'
import { LuArrowLeft } from 'react-icons/lu'

export default function BackButton(props: ButtonProps) {
  return (
    <Button {...props} size="sm" variant="ghost" asChild>
      <Link href="/docs">
        <LuArrowLeft /> <Span hideBelow="md">Docs</Span>
      </Link>
    </Button>
  )
}
