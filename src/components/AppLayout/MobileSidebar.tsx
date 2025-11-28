import Sidebar from '@/components/AppLayout/Sidebar'
import {
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { IconButton } from '@chakra-ui/react'
import { LuAlignLeft } from 'react-icons/lu'

export function MobileSidebar() {
  return (
    <DrawerRoot placement="start" lazyMount>
      <DrawerTrigger asChild hideFrom="lg">
        <IconButton aria-label="Open Menu" variant="ghost">
          <LuAlignLeft />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent>
        <Sidebar h="full" />
      </DrawerContent>
    </DrawerRoot>
  )
}
