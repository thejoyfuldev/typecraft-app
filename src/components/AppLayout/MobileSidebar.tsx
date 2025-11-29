import Sidebar from '@/components/AppLayout/Sidebar'
import Logo from '@/components/Logo'
import {
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { IconButton } from '@chakra-ui/react'
import { LuAlignLeft } from 'react-icons/lu'

export function MobileSidebar() {
  return (
    <DrawerRoot placement="start" lazyMount>
      <DrawerTrigger asChild hideFrom="lg">
        <IconButton
          aria-label="Open Menu"
          variant="ghost"
          colorPalette="gray"
          size="sm"
        >
          <LuAlignLeft />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px" h="14">
          <Logo />
        </DrawerHeader>
        <Sidebar h="full" />
      </DrawerContent>
    </DrawerRoot>
  )
}
