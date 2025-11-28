import { Bleed, Button, ButtonProps } from '@chakra-ui/react'
import Link from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'

type SidebarButtonBaseProps = Omit<
  ButtonProps,
  'asChild' | 'children' | 'as'
> & {
  children: ReactNode
}

type SidebarButtonLinkProps =
  | (SidebarButtonBaseProps & {
      isLink?: false
      href?: never
    })
  | (SidebarButtonBaseProps & {
      isLink: true
      href: string
    })

export default function SidebarButtonLink(
  props: PropsWithChildren<SidebarButtonLinkProps>
) {
  const { isLink, href, children, ...delegated } = props

  return (
    <Bleed inline="4">
      <Button
        {...delegated}
        variant="ghost"
        width="full"
        justifyContent="start"
        gap="3"
        py="6"
        _hover={{
          bg: 'colorPalette.subtle',
          color: 'colorPalette.fg',
        }}
        _currentPage={{
          color: 'colorPalette.fg',
          bg: 'colorPalette.subtle',
        }}
        asChild={isLink}
      >
        {isLink ? <Link href={href}>{children}</Link> : children}
      </Button>
    </Bleed>
  )
}
