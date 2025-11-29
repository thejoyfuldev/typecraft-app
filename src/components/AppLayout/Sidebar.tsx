'use client'

import SidebarButtonLink from '@/components/AppLayout/SidebarButtonLink'
import {
  Box,
  Separator,
  Span,
  Stack,
  StackProps,
  VStack,
} from '@chakra-ui/react'
import { useClerk, useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import {
  LuCircleUser,
  LuFileText,
  LuLogOut,
  LuTrash2,
} from 'react-icons/lu'

const topLinks = [
  {
    key: 'docs',
    label: 'Docs',
    href: '/docs',
    icon: LuFileText,
  },
  {
    key: 'trash',
    label: 'Trash',
    href: '/trash',
    icon: LuTrash2,
  },
]

export default function Sidebar(props: StackProps) {
  const { user } = useUser()
  const { signOut, openUserProfile } = useClerk()
  const pathname = usePathname()

  return (
    <Stack {...props} bg="bg.panel" justifyContent="space-between">
      <Stack gap="1" p="6">
        {topLinks.map((link) => {
          const isPathActive = link.href === pathname

          return (
            <SidebarButtonLink
              key={link.key}
              href={link.href}
              aria-current={isPathActive ? 'page' : undefined}
              isLink
            >
              <link.icon /> {link.label}
            </SidebarButtonLink>
          )
        })}

        <SidebarButtonLink onClick={() => openUserProfile()}>
          <LuCircleUser />
          Account
        </SidebarButtonLink>
      </Stack>

      <Stack gap="3">
        <Separator />
        <Stack gap="1" px="6">
          <SidebarButtonLink onClick={() => signOut()}>
            <LuLogOut />
            <VStack align="start" gap="0">
              <Span>Sign Out</Span>
              <Span color="fg.muted">
                {user?.primaryEmailAddress?.emailAddress}
              </Span>
            </VStack>
          </SidebarButtonLink>
        </Stack>
        <Box />
      </Stack>
    </Stack>
  )
}
